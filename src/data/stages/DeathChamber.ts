import Code from "../Code";
import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const red_p1 = {
	card: { "border-color": "red !important" },
	header: { "border-color": "red" },
	body: {}
};

const sets: PieceSets = new PieceSets();
sets.addSet("three container brothers", new PieceSet("scorpions who don't get along", "connect the dots"))
	.addPieces("", "")
	.addPieces("", "")
	.setStyle(red_p1.card, red_p1.header);

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