import Code from "../Code";
import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("mine cart dumping area", new PieceSet("on the tracks of a broken mine cart (top)", ["under the flattened ground", "chase the skull"]))
	.addPieces("right eye of the jumbo face", "dangerous place")
	.addPieces("ghost pulley", "chase the skull")
	.addPieces("behind two heads (lift hall)", ["red flowers for a skull couple", "the main pillar", "*DIE*"])
	.addPieces("skull pulley", ["a place where the fourth person is buried", "*DIE*"])
	.addPieces("in an oven (L2)", ["the main pillar", "mysterious door"])
	.addPieces("wooden window on a roof", "chase the skull")
	.addPieces("under the blue flame (Just Die TBH)", "stair shaped brick room (low)");

const codes: Code[] = [];
for (const key of sets.keys()) {
	const set = sets.get(key);
	if (set?.code) {
		codes.push({ piece: key, code: set.code });
	}
}

export { sets, codes };