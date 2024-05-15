import { Piece, Pieces } from "./Pieces";

class PieceSet {
	pieces: Pieces[];
	code: string|null;

	constructor(second: Piece|string, third: Piece[]|Piece|string[]|string, code: string|null = null) {
		const second_piece: Piece = (typeof second === "string") ? { piece: second } : second;
		this.pieces = [{ second: second_piece, third: this.thirdPieces(third) }];
		this.code = code;
	}

	addPieces(second: Piece|string, third: Piece[]|Piece|string[]|string): this {
		const second_piece: Piece = (typeof second === "string") ? { piece: second } : second;
		this.pieces.push({ second: second_piece, third: this.thirdPieces(third) });
		return this;
	}

	thirdPieces(third: Piece[]|Piece|string[]|string): Piece[] {
		if (typeof third === "string") {
			return [{ piece: third }];
		} else if (!Array.isArray(third)) {
			return [third];
		} else if (third.length === 0) {
			return [];
		} else if (typeof third[0] !== "string") {
			return third as Piece[];
		}

		const ret: Piece[] = [];
		for (const p of third as string[]) {
			ret.push({ piece: p });
		}

		return ret;
	}
};

export default PieceSet;