import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("shady place", new PieceSet("", "horn (P)"))
	.addPieces("", "something bad (GT)");

sets.addSet("three brothers' tombstone", new PieceSet("", "horn (C)"))
	.addPieces("", "something bad (GT)");

export default sets;