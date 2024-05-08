import PieceSet from "./PieceSet";

class PieceSets extends Map<string, PieceSet> {
	addSet(key: string, set: PieceSet): PieceSet {
		this.set(key, set);
		return set;
	}
}

export default PieceSets;
