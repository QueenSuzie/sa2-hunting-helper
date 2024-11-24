import Code from "../Code";
import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("mine cart dumping area", new PieceSet("on the tracks of a broken mine cart", ["under the flattened ground", "chase the skull"]))
	.addPieces("right eye of the jumbo face", "dangerous place")
	.addPieces("ghost pulley", "chase the skull")
	.addPieces("behind two heads (lift hall)", ["red flowers for a skull couple", "stair shaped brick room (high)"])
	.addPieces("skull pulley", ["a place where the fourth person is buried", "stair shaped brick room (high)"])
	.addPieces("water level 2 height", ["go back and forth on the tracks", "stair shaped brick room (high)", "*DIE*"])
	.addPieces("metal barrel in the luggage area", ["red flowers for a skull couple", "dangerous place"])
	.addPieces("in three metal barrels", "dented ceiling (far)")
	.addPieces("in an oven (L3 fence)", ["above the vertical line of skulls", "floating with ghosts"])
	.addPieces("in an oven (L2)", ["the main pillar", "mysterious door"])
	.addPieces("wooden window on a roof", "chase the skull")
	.addPieces("under the blue flame", "stair shaped brick room (low)")
	.addPieces("behind two heads", "the main pillar");

const codes: Code[] = [];
for (const key of sets.keys()) {
	const set = sets.get(key);
	if (set?.code) {
		codes.push({ piece: key, code: set.code });
	}
}

export { sets, codes };