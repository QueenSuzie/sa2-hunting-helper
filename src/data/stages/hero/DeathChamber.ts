import Code from "../../Code";
import { Piece } from "../../Pieces";
import PieceSet from "../../PieceSet";
import PieceSets from "../../PieceSets";

const purple = "purple";
const red = "red";
const blue = "blue";
const green = "green";
const brown = "#804000";

const purple_p1 = {
	card: { "border-color": purple + " !important" },
	header: { "border-color": purple, color: purple },
	border: "purple"
};

const red_p1 = {
	card: { "border-color": "red !important" },
	header: { "border-color": "red", color: "red" },
	border: "danger"
};

const blue_p1 = {
	card: { "border-color": "blue !important" },
	header: { "border-color": "blue", color: "blue" },
	border: "primary"
};

const green_p1 = {
	card: { "border-color": "green !important" },
	header: { "border-color": "green", color: "green" },
	border: "success"
};

const brown_p1 = {
	card: { "border-color": brown + " !important" },
	header: { "border-color": brown, color: brown },
	border: "brown"
};

const newPiece = (hint: string, color: string) => {
	return { piece: hint, isDisambiguation: false, color: color };
};

const newPieces = (hints: string[], color: string) => {
	const pieces: Piece[] = [];
	for (const hint of hints) {
		pieces.push({ piece: hint, isDisambiguation: false, color: color });
	}

	return pieces;
};

const sets: PieceSets = new PieceSets();
sets.addSet("three container brothers", new PieceSet(newPiece("scorpions who don't get along", blue), newPiece("connect the dots", green)))
	.addPieces(newPiece("sniper", blue), newPiece("*HINT*", green))
	.addPieces(newPiece("one who is looking the other way...", blue), newPiece("on the square cliff", purple))
	.addPieces(newPiece("the treasure you can't open", blue), newPiece("two eggmans facing each other", purple))
	.addPieces(newPiece("triangle flame", blue), newPiece("two eggmans facing each other", purple))
	.addPieces(newPiece("two beuatiful women on the flame", blue), newPiece("there is a flame but no light", blue))
	.addPieces(newPiece("golden goddess", blue), ["angel's ring (1/3)", "*DIE*"])
	.addPieces(newPiece("fire dance", purple), newPieces(["red jewel", "where scorpion used to be"], blue))
	.addPieces(newPiece("on the red ball", purple), "merry-go-round")
	.addPieces(newPiece("red body", purple), ["angel's ring (1/3)", "*DIE*"])
	.addPieces(newPiece("gorilla's hideout", green), "dig in the area in front of a scorpion!")
	.addPieces(newPiece("peek-a-boo eggman", green), newPiece("flat eggman", blue))
	.addPieces(newPiece("huge bug", green), "eggman's eye level")
	.addPieces(newPiece("bugs don't like it", green), "eggman's eye level")
	.addPieces(newPiece("a bat and a scorpion", purple), "*DIE*")
	.addPieces(newPiece("four leaves", green), "*DIE*")
	.addPieces(newPiece("white family", green), "*DIE*")
	.setStyle(red_p1.card, red_p1.header, undefined, red_p1.border);

sets.addSet("two mouths", new PieceSet("big marshmallow", newPiece("under the red light", purple)))
	.addPieces(newPiece("two beautiful women on the flame", blue), ["angel's ring", "flat scorpion", "*HINT*"])
	.addPieces(newPiece("sniper", blue), "dig in the area in front of the scorpion!")
	.addPieces(newPiece("angry man", blue), newPieces(["eggman's eye level", "bug tree"], purple))
	.addPieces(newPiece("fire dance", purple), newPiece("there is a flame, but no light can reach there", blue))
	.addPieces(newPiece("a bat and a scorpion", purple), newPieces(["angel's ring", "blue", "blue secret"], blue))
	.addPieces(newPiece("ghost protects the goddess", purple), newPieces(["on the square cliff (1/2)", "*DIE*"], purple))
	.addPieces(newPiece("bugs don't like it", green), "eggman's eye level")
	.addPieces(newPiece("gorilla's hideout", green), newPiece("flat eggman", blue))
	.addPieces(newPiece("peek-a-boo eggman", green), "flat scorpion")
	.addPieces(newPiece("one who is looking the other way", blue), "*DIE*")
	.addPieces(newPiece("triangle flame", blue), "*DIE*")
	.addPieces(newPiece("in the treasure chest", blue), "*DIE*")
	.setStyle(red_p1.card, red_p1.header, undefined, red_p1.border);

sets.addSet("above the small flame", new PieceSet(newPiece("golden goddess", blue), newPieces(["blue secret (1/2)", "*DIE*"], blue)))
	.addPieces(newPiece("triangle flame", blue), newPiece("blue secret", blue))
	.addPieces(newPiece("in the treasure chest", blue), newPiece("two eggmans facing each other", purple))
	.addPieces(newPiece("two beautiful women on the flame", blue), "eggman's eye level")
	.addPieces(newPiece("scorpions who don't get along", blue), newPiece("under the red light", purple))
	.addPieces(newPiece("huge black wall", purple), newPieces(["flat eggman", "the only one who is looking down"], blue))
	.addPieces(newPiece("red body", purple), newPiece("where the scorpion used to be", purple))
	.addPieces(newPiece("bugs don't like it", green), newPiece("there is a flame, but no light can reach there", blue))
	.addPieces(newPiece("peek-a-boo eggman", green), newPiece("flat eggman", blue))
	.addPieces(newPiece("sniper", blue), "*DIE*")
	.addPieces(newPiece("on the red ball", purple), "*DIE*")
	.setStyle(red_p1.card, red_p1.header, undefined, red_p1.border);

sets.addSet("black and yellow stripes", new PieceSet(newPiece("golden goddess", blue), newPiece("on the square cliff", purple), "by"))
	.addPieces(newPiece("the treasure that you can't open", blue), ["dig in the area in front of the scorpion! (1/2)", "*DIE*"])
	.addPieces(newPiece("angry man", blue), newPiece("above omochao", green))
	.addPieces(newPiece("two beautiful women on the flame", blue), ["eggman's eye level (1/2)", "*DIE*"])
	.addPieces(newPiece("scorpions who don't get along", blue), newPiece("*HINT*", green))
	.addPieces(newPiece("sniper", blue), newPiece("bug tree", purple))
	.addPieces(newPiece("a bat and a scorpion", purple), newPieces(["eggman's eye level", "flat eggman", "BLUE"], blue))
	.addPieces(newPiece("four leaves", green), "*DIE*")
	.addPieces(newPiece("gorilla's hideout", green), "*DIE*")
	.addPieces(newPiece("peek-a-boo eggman", green), "*DIE*")
	.setStyle(red_p1.card, red_p1.header, undefined, red_p1.border);

sets.addSet("Bugs on Patrol", new PieceSet("scorpion tattoo", newPiece("two beautiful women on the flame", blue)))
	.addPieces("big marshmallow", newPiece("fire dance", purple))
	.addPieces("embarrassing place", newPiece("BLUE", blue))
	.addPieces(newPiece("fire dance", purple), "heart (1/3)")
	.addPieces(newPiece("cowering beetle", blue), newPiece("gorilla's hideout", green))
	.addPieces(newPiece("golden goddess", blue), "")
	.addPieces(newPiece("eyes bugged out...?", green), newPiece("angry man", blue))
	.addPieces(newPiece("in the middle of red eyes", green), newPiece("corner light", red))
	.setStyle(red_p1.card, red_p1.header, undefined, red_p1.border);

sets.addSet("roasted keys", new PieceSet("patterned shorts", newPieces(["wandering ghost", "two guys far away"], purple)))
	.addPieces("big marshmallow", newPiece("between four pillars (secret)", blue))
	.addPieces("shoe box", newPiece("the area that four scorpions are looking at", blue))
	.addPieces(newPiece("above the small flame", blue), "merry-go-round")
	.addPieces(newPiece("bug's food", blue), newPiece("rescue chao (1/2)", red))
	.addPieces(newPiece("angry man", blue), "angel's ring")
	.addPieces(newPiece("between the legs", blue), "angel's ring")
	.addPieces(newPiece("sniper", blue), newPieces(["eggman's eye level", "on the square cliff"], purple))
	.addPieces(newPiece("red body", purple), "eggman's eye level")
	.addPieces(newPiece("treasure chest storage", green), newPieces(["in front of the scorpion", "under the red jewel"], blue))
	.addPieces(newPiece("fly higher than a bird", green), "dig in the area in front of the scorpion!")
	.addPieces("E-01 (core)", "above omochao")
	.addPieces(newPiece("E-01", green), ["angel's ring", "dig in the area in front of the scorpion!"])
	.addPieces(newPiece("bat's nest", green), newPiece("the area that four scorpions are looking at", blue))
	.setStyle(red_p1.card, red_p1.header, undefined, red_p1.border);

sets.addSet("burning mad", new PieceSet(newPiece("golden goddess", blue), newPiece("blue secret (1/2)", purple)))
	.addPieces(newPiece("scorpions who don't get along", blue), newPieces(["two bugs who gather in two trees", "*DIE*"], red))
	.addPieces(newPiece("one who is looking the other way", blue), newPieces(["on the square cliff", "under the red", "*DIE*"], purple))
	.addPieces(newPiece("angry guy", purple), newPiece("under the red light", purple))
	.addPieces(newPiece("red body", purple), ["eggman's eye level", "dig in the area in front of the scorpion!"])
	.addPieces(newPiece("a bat and a scorpion", purple), newPiece("flying fish", purple))
	.addPieces(newPiece("ghost protects the goddess", purple), newPiece("two bugs who gather in two trees", red))
	.addPieces(newPiece("two beautiful women on the flame", blue), "*DIE*")
	.addPieces(newPiece("fire dance", purple), "*DIE*")
	.addPieces(newPiece("gorilla's hideout", green), "*DIE*")
	.setStyle(brown_p1.card, brown_p1.header, undefined, brown_p1.border);

sets.addSet("yellow and black stripes", new PieceSet(newPiece("golden goddess", blue), newPieces(["two bugs who gather in two trees", "blue secret (2/3)"], red), "yb"))
	.addPieces(newPiece("triangle flame", blue), newPiece("blue secret", blue))
	.addPieces(newPiece("two beautiful women on the flame", blue), newPiece("blue secret", blue))
	.addPieces(newPiece("scorpions who don't get along", blue), newPiece("blue secret", blue))
	.addPieces(newPiece("in the treasure chest", blue), newPiece("four suns look at each other", red))
	.addPieces(newPiece("huge black wall", purple), "flat scorpion")
	.addPieces(newPiece("red body", purple), newPiece("where the scorpion used to be", purple))
	.addPieces(newPiece("fire dance", purple), "merry-go-round")
	.addPieces(newPiece("ghost protects the goddess", purple), newPiece("under the red light (1/2)", purple))
	.addPieces(newPiece("gorilla's hideout", green), "merry-go-round")
	.addPieces(newPiece("one who is looking the other way", blue), "*DIE*")
	.addPieces(newPiece("the treasure that you can't open", blue), "*DIE*")
	.setStyle(brown_p1.card, brown_p1.header, undefined, brown_p1.border);

sets.addSet("scorpion tattoo", new PieceSet(newPiece("beauty and the beast", red), newPieces(["blue secret", "under the red jewel"], blue)))
	.addPieces(newPiece("huge black wall", purple), newPieces(["flat eggman", "under the red light"], blue))
	.addPieces(newPiece("three tails", purple), newPiece("two eggmans facing each other (1/2)", purple))
	.addPieces(newPiece("a bat and a scorpion", green), newPieces(["angel's ring", "BLUE"], blue))
	.addPieces(newPiece("triangle flame", blue), "*DIE*")
	.addPieces(newPiece("fire dance", purple), "*DIE*")
	.addPieces(newPiece("on the red ball", purple), "*DIE*")
	.addPieces(newPiece("red body", purple), "*DIE*");

sets.addSet("patterned shorts", new PieceSet(newPiece("fire dance", purple), newPiece("where the scorpion used to be", purple)))
	.addPieces(newPiece("ghost protects the goddess", purple), newPiece("two eggmans facing each other (1/2)", purple))
	.addPieces(newPiece("gorilla's hideout", green), newPieces(["above omochao", "red-green secret"], green))
	.addPieces(newPiece("huge bug", green), newPiece("scorpion hiding in a box", brown))
	.addPieces(newPiece("peek-a-boo eggman", green), "angel's ring (1/2)")
	.addPieces(newPiece("the treasure that you can't open", blue), "*DIE*")
	.addPieces(newPiece("a bat and a scorpion", purple), "*DIE*")
	.addPieces(newPiece("in the treasure chest", blue), "*DIE*");

sets.addSet("big marshmallow", new PieceSet(newPiece("in the treasure chest", blue), newPiece("under the red jewel", blue)))
	.addPieces(newPiece("bug's baby", red), newPiece("flying fish", blue))
	.addPieces(newPiece("place where bug used to be", red), newPiece("two eggmans facing each other", purple))
	.addPieces(newPiece("beauty and the beast", red), newPiece("two eggmans facing each other", purple))
	.addPieces(newPiece("tilted picture", red), newPiece("blue secret", blue))
	.addPieces(newPiece("on the red ball", purple), newPiece("flying fish", blue))
	.addPieces(newPiece("three tails", purple), newPiece("on the square cliff", purple))
	.addPieces(newPiece("ghost protects the goddess", purple), newPiece("there is a flame but no light can reach", blue))
	.addPieces(newPiece("golden goddess", blue), "*DIE*");

sets.addSet("embarrassing place", new PieceSet(newPiece("one who is looking the other way...", blue), newPiece("two eggmans facing each other", purple)))
	.addPieces(newPiece("in the treasure chest", blue), newPiece("the area that four scorpions are looking at", blue))
	.addPieces(newPiece("angry guy", purple), newPiece("on the square cliff", purple))

sets.addSet("shoe box", new PieceSet(newPiece("bug's baby", red), newPiece("it's floating between the flames", green)))
	.addPieces(newPiece("place where bug used to be", blue), newPiece("the only one who is looking down", blue))
	.addPieces(newPiece("treasure chest protected by a scorpion", red), newPiece("on the square cliff", purple))
	.addPieces(newPiece("huge black wall", purple), newPieces(["under the red light", "where scorpion used to be"], purple))

sets.addSet("angry guy", new PieceSet(newPiece("gorilla's hideout", green), newPiece("the only one who is looking down", blue)))
	.addPieces(newPiece("peek-a-boo eggman", green), newPiece("flying fish", blue))
	.addPieces(newPiece("white family", green), "dig in the area in front of a scorpion! (1/3)")
	.addPieces(newPiece("one who is looking the other way...", blue), newPieces(["wind power", "the only one who is looking down"], red))
	.addPieces(newPiece("in the treasure chest", blue), ["merry-go-round", "flat scorpion"])
	.addPieces(newPiece("ghost protects the goddess", purple), ["angel's ring", "flat scorpion"])
	.setStyle(purple_p1.card, purple_p1.header, undefined, purple_p1.border);

sets.addSet("fire dance", new PieceSet(newPiece("burning mad", green), "dig in the area in front of a scorpion!"))
	.addPieces(newPiece("corner light", red), ["eggman's eye level", "flat scorpion"])
	.addPieces(newPiece("ghost protects the goddess", purple), "dig in the area in front of a scorpion!")
	.addPieces(newPiece("huge bug", green), "dig in the area in front of a scorpion!")
	.addPieces(newPiece("gorilla's hideout", green), "dig in the area in front of a scorpion!")
	.addPieces(newPiece("peek-a-boo eggman", blue), newPiece("flat eggman", blue))
	.addPieces(newPiece("four leaves", blue), newPiece("flat eggman", blue))
	.addPieces(newPiece("white family", green), "angel's ring (1/2)")
	.setStyle(purple_p1.card, purple_p1.header, undefined, purple_p1.border);

sets.addSet("cowering beetle (Death Strat)", new PieceSet("gorilla's hideout", newPiece("flying fish", blue)))
	.addPieces(newPiece("huge black wall", purple), newPiece("dig in the area in front of a scorpion!", green))
	.setStyle(blue_p1.card, blue_p1.header, undefined, blue_p1.border);
sets.addSet("angry man (Death Strat)", new PieceSet("gorilla's hideout", newPiece("between four pillars", blue)))
	.addPieces(newPiece("ghost protects the goddess", purple), newPiece("the only one who is looking down", blue))
	.setStyle(blue_p1.card, blue_p1.header, undefined, blue_p1.border);
sets.addSet("between the legs (Death Strat)", new PieceSet("burning mad", newPiece("between four pillars", blue)))
	.setStyle(blue_p1.card, blue_p1.header, undefined, blue_p1.border);
sets.addSet("four square pillars (Death Strat)", new PieceSet("gorilla's hideout", newPiece("flying fish", blue)))
	.addPieces("huge bug", newPiece("flying fish", blue))
	.addPieces(newPiece("bugs don't like it", green), newPiece("the only one who is looking down", blue))
	.addPieces(newPiece("bug's baby", red), "dig in the area in front of a scorpion!")
	.setStyle(blue_p1.card, blue_p1.header, undefined, blue_p1.border);
sets.addSet("snakes (Death Strat)", new PieceSet("beauty and the beast", newPiece("flying fish", blue)))
	.addPieces("bug's baby", newPiece("flying fish", blue))
	.addPieces("tilted picture", newPiece("between four pillars", blue))
	.setStyle(blue_p1.card, blue_p1.header, undefined, blue_p1.border);
sets.addSet("water bug (Death Strat)", new PieceSet("peek-a-boo eggman", newPiece("flying fish", blue)))
	.setStyle(blue_p1.card, blue_p1.header, undefined, blue_p1.border);
sets.addSet("white dot indicates blue (Death Strat)", new PieceSet("two gatekeepers", newPiece("between four pillars", blue)))
	.addPieces("corner light", newPiece("between four pillars", blue))
	.setStyle(blue_p1.card, blue_p1.header, undefined, blue_p1.border);
sets.addSet("long vertical white line (Death Strat)", new PieceSet("two gatekeepers", newPiece("flying fish", blue)))
	.addPieces(newPiece("huge bug", green), newPiece("the only one who is looking down", blue))
	.addPieces(newPiece("beauty and the beast", red), "merry-go-round")
	.addPieces("two containers", newPiece("connect the dots", green))
	.setStyle(blue_p1.card, blue_p1.header, undefined, blue_p1.border);

const bugs_food = new PieceSet("white family", newPiece("between four pillars", blue));
sets.addSet("bugs food (Death Strat)", bugs_food);
sets.addSet("bug's food (Death Strat)", bugs_food)
	.setStyle(blue_p1.card, blue_p1.header, undefined, blue_p1.border);

const codes: Code[] = [];
for (const key of sets.keys()) {
	const set = sets.get(key);
	if (set?.code) {
		codes.push({ piece: key, code: set.code });
	}
}

export { sets, codes };