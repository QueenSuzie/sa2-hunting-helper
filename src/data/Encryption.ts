/**
 * Encryption wrapper for piece DB.
 * This isn't meant to secure anything, it's meant to serve
 * as a quick means of validating restoration files.
 */
class Encryption {
	static ENCRYPTION_KEY: string = "com.queen.suzie.sa2-hunting-helper.encryption-key";

	static async encrypt(content: any): Promise<Uint8Array> {
		const salt: Uint8Array = crypto.getRandomValues(new Uint8Array(16));
		const key: CryptoKey = await Encryption.getKey(salt);
		const iv: Uint8Array = crypto.getRandomValues(new Uint8Array(12));
		const contentBytes: Uint8Array = Encryption.stringToBytes(JSON.stringify(content));

		const cipher: Uint8Array = new Uint8Array(
			await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, contentBytes)
		);

		return Uint8Array.from(btoa(JSON.stringify({
			salt: Encryption.bytesToBase64(salt),
			iv: Encryption.bytesToBase64(iv),
			cipher: Encryption.bytesToBase64(cipher),
		})), (c) => c.charCodeAt(0));
	}

	static async decrypt(encryptedData: Uint8Array): Promise<any> {
		const data: any = JSON.parse(atob(Array.from(encryptedData, (b) => String.fromCharCode(b)).join("")));
		const key: CryptoKey = await Encryption.getKey(Encryption.base64ToBytes(data.salt));
		const iv: Uint8Array = Encryption.base64ToBytes(data.iv);
		const cipher: Uint8Array = Encryption.base64ToBytes(data.cipher);

		const contentBytes: Uint8Array = new Uint8Array(
			await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, cipher)
		);

		return JSON.parse(Encryption.bytesToString(contentBytes));
	}

	static async getKey(salt: Uint8Array): Promise<CryptoKey> {
		const passwordBytes: Uint8Array = Encryption.stringToBytes(Encryption.ENCRYPTION_KEY);

		const initialKey: CryptoKey = await crypto.subtle.importKey(
			"raw",
			passwordBytes,
			{ name: "PBKDF2" },
			false,
			["deriveKey"]
		);

		return crypto.subtle.deriveKey(
			{ name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },
			initialKey,
			{ name: "AES-GCM", length: 256 },
			false,
			["encrypt", "decrypt"]
		);
	}

	static bytesToString(bytes: Uint8Array): string {
		return new TextDecoder().decode(bytes);
	}

	static stringToBytes(data: string): Uint8Array {
		return new TextEncoder().encode(data);
	}

	static bytesToBase64(arr: Uint8Array): string {
		return btoa(Array.from(arr, (b) => String.fromCharCode(b)).join(""));
	}

	static base64ToBytes(base64: string): Uint8Array {
		return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
	}
};

export default Encryption;