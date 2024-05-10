import Pieces from "./Pieces";

class PieceSet {
	pieces: Pieces[];
	code: string|null;

	constructor(second: string, third: string, code: string|null = null) {
		this.pieces = [{ second: second, third: third }];
		this.code = code;
	}

	addPieces(second: string, third: string): this {
		this.pieces.push({ second: second, third: third });
		return this;
	}
};

export default PieceSet;