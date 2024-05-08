import Pieces from "./Pieces";

class PieceSet {
	pieces: Pieces[];

	constructor(second: string, third: string) {
		this.pieces = [{ second: second, third: third }];
	}

	addPieces(second: string, third: string): this {
		this.pieces.push({ second: second, third: third });
		return this;
	}
};

export default PieceSet;