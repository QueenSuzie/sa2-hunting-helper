import Code from "../../Code";
import PieceSet from "../../PieceSet";
import PieceSets from "../../PieceSets";

const step_back = "step back and wait";
const terrible = "terrible! a skull buried in the rocky wall";
const creepy = "pumpkin with creepy smile is looking at?";

const sets: PieceSets = new PieceSets();
sets.addSet("shady place", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (GT)"))
	.addPieces("sad-eyed pumpkin (P)", "ghost pumpkin's necklace")
	.addPieces("pumpkins who don't get along", ["angel's ring", "stuffed nose"])
	.addPieces("pumpkin triangle", "king of the hill")
	.addPieces("scramble for the emeralds", "on patrol?")
	.addPieces("ghost train station", "three against three");

sets.addSet("three brothers' tombstone", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (GT)"))
	.addPieces("sad-eyed pumpkin (2/3 P)", "on patrol? (2/3)")
	.addPieces("a place you can't jump", "something bad (GT)")
	.addPieces({ piece: "pumpkin family", isDisambiguation: true }, ["dangerous material", step_back])
	.addPieces("pumpkins who don't get along", "angel's ring")
	.addPieces("scarecrow's house", "horn (GT)")
	.addPieces("the person you are waiting for", ["angel's ring", "ghost pumpkin's necklace"])
	.addPieces("the rocket path", "pray for a good harvest")
	.addPieces("pumpkin snowman", "three against three")
	.addPieces("under the tracks", ["pray for a good harvest", creepy]);

sets.addSet("twin huts", new PieceSet("sad-eyed pumpkin (P)", ""))
	.addPieces("laughing pumpkin", step_back)
	.addPieces("pumpkins who don't get along", "endless journey")
	.addPieces("ghost train station", "sad-eyed pumpkin")
	.addPieces("sleep behind a pumpkin", "endless journey")
	.addPieces("the person you are waiting for", "lost pumpkin")
	.addPieces("twin skulls", ["angel's ring", "a place where flames cross"])
	.addPieces("sleep with the dead (Near)", "something bad (C)")
	.addPieces("sleep with the dead (Far)", "stuffed nose")
	.addPieces({ piece: "under a chimney", isDisambiguation: true }, "something bad (C)");

sets.addSet("very high up", new PieceSet({ piece: "sad-eyed pumpkin (2/3 GT)", isDisambiguation: true }, "horn (P)"))
	.addPieces("pumpkins who don't get along", "something bad (C)")
	.addPieces("a scarecrow protecting a container", "ghost pumpkin's necklace")
	.addPieces("ghost train station", ["angel's ring (1/4)", "something bad (C)"])
	.addPieces("scarecrow's house", "flattened grass")
	.addPieces("it's about to fall off", "you can see it but you can't take it")
	.addPieces({ piece: "pumpkin snowman", isDisambiguation: true }, "something bad (GT)")
	.addPieces({ piece: "scramble for the emeralds", isDisambiguation: true }, "something bad (?)")
	.addPieces({ piece: "under the tracks", isDisambiguation: true }, "horn (P)")
	.addPieces("three brother's tombstone (GT)", "angel's ring (1/4)");

sets.addSet("tells time", new PieceSet("sad-eyed pumpkin (P)", ""))
	.addPieces("a place you can't jump", "wander around in a circle (Top)")
	.addPieces("pumpkins who don't get along", "three against three")
	.addPieces("under a chimney", ["angel's ring", "wander around in a circle (Bot)"])
	.addPieces("a scarecrow protecting a container", ["angel's ring", "flattened grass"])
	.addPieces("pumpkin snowman", "something bad (C)")
	.addPieces("scarecrow's house", "ghost pumpkin's necklace")
	.addPieces("the rocket path", "stuffed nose")
	.addPieces({ piece: "ghost train station", isDisambiguation: true }, "something bad (GT)")
	.addPieces("three brothers' tombstone (GT)", "");

sets.addSet("it's a floor and also a ceiling (Church)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (GT)"]))
	.addPieces("sad-eyed pumpkin (5/6 GT)", "")
	.addPieces("scarecrow's house", "noise upstairs and downstairs")
	.addPieces("scramble for the emeralds", "on patrol?")
	.addPieces("sleep behind a pumpkin", "three against three")
	.addPieces("under a chimney", "sad-eyed pumpkin")
	.addPieces("pumpkin snowman", "a place where flames cross")
	.addPieces({ piece: "three brothers' tombstone (GT)", isDisambiguation: true }, "something bad (C)");

sets.addSet("tombstone by some grass", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (C)"))
	.addPieces("sad-eyed pumpkin (GT)", "three scarecrow brothers")
	.addPieces("the rocket path", "angel's ring (1/4)")
	.addPieces("it's about to fall off", "noise upstairs and downstairs")
	.addPieces({ piece: "pumpkin snowman", isDisambiguation: true }, "something bad (?)");

sets.addSet("forgotten hut (Church)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (GT)"]))
	.addPieces("sad-eyed pumpkin (P)", "something bad (GT)")
	.addPieces("a place you can't jump", ["angel's ring", "ghost pumpkin's necklace", "noise upstairs and downstairs"])
	.addPieces("pumpkins who don't get along", "stuffed nose")
	.addPieces("scramble for the emeralds", "on patrol?")
	.addPieces("sleep behind a pumpkin", ["angel's ring", "wander around in a circle (Top)"])
	.addPieces("the person you are waiting for finally arrived", "flattened grass")
	.addPieces("under the tracks", "wander around in a circle (Bot)")
	.addPieces("it's about to fall off", "wander around in a circle (Top)");

sets.addSet("it's about to fall off", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (GT)"]))
	.addPieces({ piece: "sad-eyed pumpkin (4/5 P)", isDisambiguation: true }, ["horn (P)", "something bad (?)"])
	.addPieces("a place you can't jump", "noise upstairs and downstairs")
	.addPieces("a scarecrow protecting a container", "wander around in a circle (Top)")
	.addPieces("scarecrow's house", "noise upstairs and downstairs")
	.addPieces("the rocket path", "in the center of a triangle")
	.addPieces("under the tracks", terrible);

sets.addSet("path of the ghost train", new PieceSet({ piece: "sad-eyed pumpkin. (7/11 GT)", isDisambiguation: true }, "horn (P)"))
	.addPieces("a scarecrow protecting a container", "horn (GT)")
	.addPieces("ghost train station", "king of the hill")
	.addPieces("scramble for the emeralds", ["angel's ring", "horn (GT)"])
	.addPieces("sleep behind a pumpkin", "angel's ring (1/4)")
	.addPieces("the rocket path", "king of the hill")
	.addPieces("under the tracks", ["angel's ring", step_back]);

sets.addSet("a path lined with rings", new PieceSet("sad-eyed pumpkin (P)", ""))
	.addPieces({ piece: "under a chimney", isDisambiguation: true }, "something bad (C)")
	.addPieces("the person you are waiting for", "bearded mountain")
	.addPieces("scarecrow's house", "something bad (GT)")
	.addPieces("sleep behind a pumpkin", "ghost train's guidepost")
	.addPieces("twin skulls", ["horn (C)", "wander around in a circle (Top)"])
	.addPieces("lonely tombstone", ["on patrol?", terrible])
	.addPieces("you can see it but you can't take it", "three scarecrow brothers")
	.addPieces({ piece: "pumpkins who don't get along", isDisambiguation: true }, "horn (C)");

sets.addSet("scramble for the emeralds", new PieceSet("sad-eyed pumpkin (P)", "horn (C)"))
	.addPieces("under a chimney", "stuffed nose")
	.addPieces("lonely tombstone", ["sad-eyed pumpkin", terrible])
	.addPieces("you can see it but you can't take it", "angel's ring")
	.addPieces({ piece: "scarecrow's house", isDisambiguation: true }, "horn (C)");

sets.addSet("second skull from the top fifth from the bottom (Left)", new PieceSet("sad-eyed pumpkin (P)", "ghost pumpkin's necklace", "sl"))
	.addPieces("pumpkin family", "you can see it but you can't take it")
	.addPieces("the rocket path", "flaming emeralds")
	.addPieces("you can see it but you can't take it", "king of the hill")
	.addPieces({ piece: "scarecrow's house", isDisambiguation: true }, "something bad (C)")
	.addPieces({ piece: "the person you are waiting for", isDisambiguation: true }, "horn (C)")
	.addPieces({ piece: "twin skulls", isDisambiguation: true }, "horn (P)");

sets.addSet("second skull from the top fifth from the bottom (Right)", new PieceSet({ piece: "sad-eyed pumpkin (P)", isDisambiguation: true }, "horn (C)", "sr"))
	.addPieces("laughing pumpkin", "bearded mountain")
	.addPieces("scarecrow's house", "horn (C)")
	.addPieces("twin skulls", ["flaming emeralds", "stuffed nose"])
	.addPieces("there is only one on the cliff", "wander around in a circle (Top)")
	.addPieces("you can see it but you can't take it", creepy)
	.addPieces({ piece: "pumpkin's who don't get along", isDisambiguation: true }, "horn (C)")
	.addPieces({ piece: "the person you are waiting for", isDisambiguation: true }, "something bad (C)")
	.addPieces({ piece: "sleep with the dead", isDisambiguation: true }, "horn (P)")
	.addPieces("three brother's tombstone (C)", "three scarecrow brothers");

sets.addSet("skulls on the right and left", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (C)"], "srl"))
	.addPieces("sad-eyed pumpkin (P)", "sad-eyed pumpkin")
	.addPieces("under a chimney", "horn (C)")
	.addPieces("twin skulls", "angel's ring")
	.addPieces({ piece: "pumpkin family", isDisambiguation: true }, ["horn (C)", "something bad (C)"])
	.addPieces({ piece: "pumpkin triangle", isDisambiguation: true }, "horn (C)");

sets.addSet("forgotten hut (GT)", new PieceSet("sad-eyed pumpkin (P)", ""))
	.addPieces("pumpkin family", "something bad (GT)")
	.addPieces("under a chimney", "a missile path")
	.addPieces("scarecrow's house", ["horn (C)", "something bad (GT)"])
	.addPieces("ghost train station", "pray for a good harvest")
	.addPieces("sleep behind a pumpkin", "sad-eyed pumpkin")
	.addPieces("twin skulls", "stuffed nose");

sets.addSet("turns but doesn't turn", new PieceSet("sad-eyed pumpkin (P)", "on patrol? (1/4)"))
	.addPieces("a place you can't jump", ["ghost pumpkin's necklace", "ghost train's guidepost"])
	.addPieces("pumpkin family", "angel's ring")
	.addPieces("pumpkins who don't get along", "stuffed nose")
	.addPieces("pumpkin triangle", "endless journey")
	.addPieces("sleep behind a pumpkin", "ghost train's guidepost")
	.addPieces("the rocket path", "something bad (GT)")
	.addPieces("lonely tombstone", "stuffed nose")
	.addPieces("you can see it but you can't take it", "on patrol?")
	.addPieces({ piece: "scarecrow's house", isDisambiguation: true }, "something bad (GT)")
	.addPieces({ piece: "sleep with the dead", isDisambiguation: true }, "something bad (C)");

sets.addSet("king of the hill", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("sad-eyed pumpkin (P)", "sad-eyed pumpkin")
	.addPieces("pumpkins who don't get along", "you can see it but you can't take it")
	.addPieces("ghost train station", "on patrol? (1/3)")
	.addPieces("lonely tombstone", ["ghost pumpkin's necklace", "pray for a good harvest"])
	.addPieces("twin skulls", "king of the hill")
	.addPieces("there is only one on the cliff", ["noise upstairs and downstairs", "angel's ring", step_back])
	.addPieces("you can see it but you can't take it", ["noise upstairs and downstairs", "on patrol?"])
	.addPieces({ piece: "sleep with the dead", isDisambiguation: true }, "horn (P)");

sets.addSet("it's a floor, but it's also a ceiling? (Ghost)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("sad-eyed pumpkin (P)", "you can see it but you can't take it")
	.addPieces("a place you can't jump", ["flaming emeralds", "ghost pumpkin's necklace"])
	.addPieces("pumpkins who don't get along", "lost pumpkin")
	.addPieces("ghost train station", ["angel's ring", "three brothers' tombstone"])
	.addPieces("the person you are waiting for", "in the center of a triangle")
	.addPieces("sleep with the dead", step_back)
	.addPieces("there is only one on the cliff", "noise upstairs and downstairs")
	.addPieces({ piece: "you can see it but you can't take it", isDisambiguation: true }, "dangerous material (1/2)")
	.addPieces({ piece: "scarecrow's house", isDisambiguation: true }, "something bad (GT)")
	.addPieces({ piece: "lonely tombstone", isDisambiguation: true }, "horn (P)");

sets.addSet("a farm house", new PieceSet("lonely tombstone", ["flaming emeralds", "noise upstairs and down", "wandering around a cricle (Bot)"]))
	.addPieces("sleep with the dead", "sad-eyed pumpkin")
	.addPieces("there is only one on the cliff", ["angel's ring", "something bad (GT)"])
	.addPieces("you can see it but you can't take it", [step_back, "horn (P)", "something bad (GT)"])
	.addPieces("under the chimney", "ghost train's guidepost")
	.addPieces("sleepless house", ["horn (C)", "three brothers' tombstone"])
	.addPieces({ piece: "chimney near some grass", isDisambiguation: true }, "something bad (C)")
	.addPieces("three brothers' tombstone (2/3 C)", "");

sets.addSet("a three-foot gap", new PieceSet("lonely tombstone", "angel's ring"))
	.addPieces("twin skulls", ["noise upstairs and downstairs", "horn (GT)"])
	.addPieces("sleep with the dead (Island)", "three against three")
	.addPieces("there is only one on the cliff", "horn (P)")
	.addPieces("king of the hill", "three brother's tombstone")
	.addPieces({ piece: "cold iron bars", isDisambiguation: true }, "something bad (C)")
	.addPieces("three brothers' tombstone (2/3 GT)", "");

sets.addSet("laughing into tears", new PieceSet("cold iron bars", "YO!? [Pray for a good harvest]"))
	.addPieces("lonely tombstone", ["sad-eyed pumpkin", "horn (P)", "angel's ring"])
	.addPieces("twin skulls", "three against three")
	.addPieces("there is only one on the cliff", "three against three")
	.addPieces("a tombstone near some grass", [step_back, "missile path"])
	.addPieces("king of the hill", "flaming emeralds")
	.addPieces("sleepless house", "lost pumpkin");

sets.addSet("pumpkin family", new PieceSet("cold iron bars", "something bad (GT)"))
	.addPieces("three metal barrels", "horn (C)")
	.addPieces("twin skulls", "ghost pumpkin's necklace (1/3)")
	.addPieces("there is only one on the cliff", "something bad (GT)")
	.addPieces("chimney near some grass", "angel's ring")
	.addPieces("king of the hill", "ghost pumpkin's necklace")
	.addPieces("under the tracks", "ghost pumpkin's necklace (1/2)")
	.addPieces({ piece: "sleep with the dead", isDisambiguation: true }, "horn (P)")
	.addPieces("three brothers' tombstone", ["stuffed nose", "ghost pumpkin's necklace", "noise upstairs and downstairs"]);

sets.addSet("three skull brothers", new PieceSet("sad-eyed pumpkin (P)", "ghost train's guide post"))
	.addPieces("lonely tombstone", "stuffed nose")
	.addPieces("sleep with the dead", "pray for a good harvest")
	.addPieces("you can see it but you can't take it", "king of the hill")
	.addPieces("under the chimney", "a missile path")
	.addPieces("a tombstone near some grass", "pray for a good harvest")
	.addPieces("king of the hill", "bearded mountain")
	.addPieces("sleepless house", "bearded mountain");

sets.addSet("three metal barrels", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (GT)"))
	.addPieces("sad-eyed pumpkin (P)", ["angel's ring", "on patrol?"])
	.addPieces("a scarecrow protecting a container", ["angel's ring", "king of the hill"])
	.addPieces("ghost train station", "flattened grass")
	.addPieces("scramble for the emeralds", "three against three")
	.addPieces("the person you are waiting for", "flattened grass")
	.addPieces("it's about to fall off", "ghost pumpkin's necklace")
	.addPieces("under the tracks", "pray for a good harvest")
	.addPieces({ piece: "three brothers' tombstone (?)", isDisambiguation: true }, "");

sets.addSet("the tombstone guarded by four skulls", new PieceSet({ piece: "", isDisambiguation: true }, "horn (P)"))
	.addPieces("sad-eyed pumpkin (GT)", "stuffed nose")
	.addPieces("a place you can't jump", "horn (GT)")
	.addPieces("pumpkin family", "wandering around in a circle (Top)")
	.addPieces("pumpkins who don't get along", "flattened grass")
	.addPieces("ghost train station", "sad-eyed pumpkin")
	.addPieces("pumpkin snowman", "king of the hill")
	.addPieces("the person you are waiting for", ["dangerous material", "on patrol?", "ghost pumpkin's necklace", "king of the hill"])
	.addPieces("it's about to fall off", step_back);

sets.addSet("under the chimney (Near)", new PieceSet({ piece: "sad-eyed pumpkin (P)", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("pumpkin family", "angel's ring")
	.addPieces("ghost train station", "sad-eyed pumpkin")
	.addPieces("lonely tombstone", "horn (P)")
	.addPieces({ piece: "sleep behind a pumpkin", isDisambiguation: true }, "something bad (GT)")
	.addPieces({ piece: "you can see it but you can't take it", isDisambiguation: true }, "horn (P)");

sets.addSet("under the chimney (Far)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("sad-eyed pumpkin (P)", "lost pumpkin")
	.addPieces("pumpkin triangle", ["ghost pumpkin's necklace", "endless journey"])
	.addPieces("the person you are waiting for", "ghost pumpkin's necklace")
	.addPieces("lonely tombstone", ["ghost pumpkin's necklace", "dangerous material (2/3)"])
	.addPieces("three brothers' tombstone (C)", "");

sets.addSet("double container (GT)", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (GT)"))
	.addPieces({ piece: "sad-eyed pumpkin (8/11 GT)", isDisambiguation: true }, "something bad (C)")
	.addPieces("pumpkins who don't get along", "flaming emeralds")
	.addPieces("scarecrow's house", "stuffed nose")
	.addPieces("the person you are waiting for", ["ghost pumpkin's necklace", "missile path"])
	.addPieces("under a chimney", "lost pumpkin");

const codes: Code[] = [];
for (const key of sets.keys()) {
	const set = sets.get(key);
	if (set?.code) {
		codes.push({ piece: key, code: set.code });
	}
}

export { sets, codes };