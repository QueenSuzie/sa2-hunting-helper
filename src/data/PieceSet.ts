import { Piece, Pieces } from "./Pieces";

class PieceSet {
	pieces: Pieces[];
	code: string|null;

	constructor(second: Piece|string, third: Piece|string, code: string|null = null) {
		const second_piece: Piece = (typeof second === "string") ? { piece: second } : second;
		const third_piece: Piece = (typeof third === "string") ? { piece: third } : third;
		this.pieces = [{ second: second_piece, third: third_piece }];
		this.code = code;
	}

	addPieces(second: Piece|string, third: Piece|string): this {
		const second_piece: Piece = (typeof second === "string") ? { piece: second } : second;
		const third_piece: Piece = (typeof third === "string") ? { piece: third } : third;
		this.pieces.push({ second: second_piece, third: third_piece });
		return this;
	}
};

export default PieceSet;