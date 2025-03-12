import Code from "../../Code";
import PieceSet from "../../PieceSet";
import PieceSets from "../../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("blue striped head (small oasis)", new PieceSet("behind the pillar plants", ["bulls eye!", "under turtles face"]))
	.addPieces("behind the rubble", "under a chin (left)")
	.addPieces("behind the water plant", "on the tilted pillar")
	.addPieces("blue and white \"V\"", ["suns facing each other", "floating butterflies"])
	.addPieces("blue and white striped pillar", ["big and small pillars", "up and down stairs"])
	.addPieces("on the head (left only)", "under the turtle's face")
	.addPieces("turtle's path (close)", "beneath the stone face apartments")
	.addPieces("turtle's path (far)", "under a chin (left)");

const codes: Code[] = [];
for (const key of sets.keys()) {
	const set = sets.get(key);
	if (set?.code) {
		codes.push({ piece: key, code: set.code });
	}
}

export { sets, codes };