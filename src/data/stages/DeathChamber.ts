import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("", new PieceSet("", ""))
	.addPieces("", "")
	.addPieces("", "");

export default sets;