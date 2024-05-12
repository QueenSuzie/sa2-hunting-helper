import Code from "../Code";
import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("shady place", new PieceSet("if p3 = hear horn", "pumpkin"))
	.addPieces("if p3 = something bad", "ghost train")
	.addPieces("", "")
	.addPieces("", "")
	.addPieces("", "")
	.addPieces("", "");

sets.addSet("three brothers' tombstone", new PieceSet("", "horn (C)"))
	.addPieces("", "something bad (GT)");

sets.addSet("", new PieceSet("", ""))
	.addPieces("", "")
	.addPieces("", "");

const codes: Code[] = [];
for (const key of sets.keys()) {
	const set = sets.get(key);
	if (set?.code) {
		codes.push({ piece: key, code: set.code });
	}
}

export { sets, codes };