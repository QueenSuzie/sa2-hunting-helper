import Code from "../Code";
import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("shady place", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (GT)"]))
	.addPieces("sad-eyed pumpkin (P)", "something bad (GT)")
	.addPieces("ghost train station", "something bad (GT)")
	.addPieces("pumpkin triangle", "king of the hill")
	.addPieces("scramble for the emeralds", "horn (P)");

sets.addSet("three brothers' tombstone", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (GT)"]))
	.addPieces("sad-eyed pumpkin (2/3 P)", "")
	.addPieces("a place you can't jump", "king of the hill")
	.addPieces("pumpkins who don't get along", "sad-eyed pumpkin")
	.addPieces("pumpkin snowman", "something bad (GT)")
	.addPieces("scarecrow's house", "stuffed nose?")
	.addPieces("the rocket path", "bearded mountain")
	.addPieces({ piece: "pumpkin family", isDisambiguation: true }, "horn (P)");

sets.addSet("twin huts", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces({ piece: "sad-eyed pumpkin (P)", isDisambiguation: true }, "something bad (C)")
	.addPieces("twin skulls", "terrible! a skull buried in the rocky wall")
	.addPieces("laughing pumpkin", "three scarecrow brothers")
	.addPieces("pumpkins who don't get along", "horn (C)")
	.addPieces("ghost train station", "sad-eyed pumpkin")
	.addPieces("sleep behind a pumpkin", "horn (C)")
	.addPieces("the person you are waiting for", "lost pumpkin")
	.addPieces({ piece: "lonely tombstone", isDisambiguation: true }, "horn (P)")
	.addPieces({ piece: "there is only one on the cliff", isDisambiguation: true }, ["horn (P)", "something bad (C)"]);

sets.addSet("very high up", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (C)"))
	.addPieces({ piece: "sad-eyed pumpkin (2/3 P)", isDisambiguation: true }, "something bad (GT)")
	.addPieces("pumpkins who don't get along", "something bad (C)")
	.addPieces("a scarecrow protecting a container", "something bad (C)")
	.addPieces("scarecrow's house", "three against three")
	.addPieces("it's about to fall off", "something bad (C)")
	.addPieces({ piece: "the person you are waiting for", isDisambiguation: true }, "something bad (GT)");

sets.addSet("tells time", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (C)"))
	.addPieces({ piece: "sad-eyed pumpkin (P)", isDisambiguation: true }, "something bad (GT)")
	.addPieces("a place you can't jump", "horn (GT)")
	.addPieces("pumpkins who don't get along", "something bad (GT)")
	.addPieces("pumpkin snowman", "horn (GT)")
	.addPieces("scarecrow's house", "sad-eyed pumpkin")
	.addPieces("the rocket path", "three against three")
	.addPieces("three brothers' tombstone (GT)", "");

sets.addSet("it's a floor and also a ceiling (Church)", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (GT)"))
	.addPieces({ piece: "sad-eyed pumpkin (5/6 GT)", isDisambiguation: true }, "horn (P)")
	.addPieces("under a chimney", "sad-eyed pumpkin")
	.addPieces("pumpkin snowman", "something bad (C)")
	.addPieces("scarecrow's house", "something bad (GT)")
	.addPieces("scramble for the emeralds", "three brothers' tombstone")
	.addPieces("sleep behind a pumpkin", "something bad (GT)")
	.addPieces({ piece: "pumpkin family", isDisambiguation: true }, "something bad (C)")
	.addPieces("three brothers' tombstone (GT)", "");

sets.addSet("tombstone by some grass", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (GT)"))
	.addPieces("sad-eyed pumpkin (GT)", "three scarecrow brothers")
	.addPieces("it's about to fall off", "three against three")
	.addPieces({ piece: "pumpkin family", isDisambiguation: true }, "something bad (C)")
	.addPieces({ piece: "under a chimney", isDisambiguation: true }, ["horn (P)", "something bad (C)"])
	.addPieces({ piece: "pumpkin snowman", isDisambiguation: true }, "something bad (C)");

sets.addSet("forgotten hut (C)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (GT)"]))
	.addPieces("sad-eyed pumpkin (P)", "king of the hill")
	.addPieces("pumpkin family", "horn (P)")
	.addPieces("pumpkins who don't get along", "sad-eyed pumpkin")
	.addPieces("scramble for the emeralds", "terrible! a skull buried in the rocky wall")
	.addPieces("the person you are waiting for", "horn (GT)")
	.addPieces("it's about to fall off", "three against three")
	.addPieces("under the tracks", "horn (GT)");

sets.addSet("it's about to fall off", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (C)"))
	.addPieces({ piece: "sad-eyed pumpkin (4/5 P)", isDisambiguation: true }, "something bad (C)")
	.addPieces("a place you can't jump", "something bad (GT)")
	.addPieces("a scarecrow protecting a container", "three against three")
	.addPieces("scarecrow's house", "something bad (GT)")
	.addPieces("the rocket path", "in the center of a triangle")
	.addPieces("under the tracks", "terrible! a skull buried in the rocky wall")
	.addPieces("pumpkin triangle", "something bad (?)")
	.addPieces("sleep behind a pumpkin", "something bad (?)");

sets.addSet("path of the ghost train", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (GT)"]))
	.addPieces({ piece: "sad-eyed pumpkin (7/11 GT)", isDisambiguation: true }, "something bad (GT)")
	.addPieces("a scarecrow protecting a container", "sad-eyed pumpkin")
	.addPieces("ghost train station", "king of the hill")
	.addPieces("scramble for the emeralds", "stuffed nose")
	.addPieces("the rocket path", "king of the hill");

sets.addSet("a path lined with rings", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("sad-eyed pumpkin (P)", "")
	.addPieces("under a chimney", "something bad (C)")
	.addPieces("scarecrow's house", "stuffed nose")
	.addPieces("sleep behind a pumpkin", "horn (C)")
	.addPieces("the person you are waiting for", "bearded mountain")
	.addPieces("you can see it but you can't take it", "king of the hill")
	.addPieces({ piece: "lonely tombstone", isDisambiguation: true }, "horn (P)");

sets.addSet("scramble for the emeralds", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (C)"]))
	.addPieces("sad-eyed pumpkin (P)", "horn (C)")
	.addPieces("under a chimney", "in the center of a triangle")
	.addPieces("you can see it but you can't take it", "a place where flames cross")
	.addPieces({ piece: "scarecrow's house", isDisambiguation: true }, ["horn (C)", "something bad (C)"])
	.addPieces({ piece: "the rocket path", isDisambiguation: true }, "horn (C)");

sets.addSet("second skull from the top fifth from the bottom (Left)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("sad-eyed pumpkin (P)", "sad-eyed pumpkin")
	.addPieces("pumpkin family", "something bad (C)")
	.addPieces("the rocket path", "stuffed nose")
	.addPieces("sleep with the dead", "stuffed nose")
	.addPieces("you can see it but you can't take it", "king of the hill")
	.addPieces({ piece: "lonely tombstone", isDisambiguation: true }, "horn (P)");

sets.addSet("second skull from the top fifth from the bottom (Right)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("sad-eyed pumpkin (P)", "")
	.addPieces("laughing pumpkin", "bearded mountain")
	.addPieces("scarecrow's house", "horn (C)")
	.addPieces("the person you are waiting for", "something bad (C)")
	.addPieces("there is only one on the cliff", "a place where flames cross")
	.addPieces("you can see it but you can't take it", "sad-eyed pumpkin")
	.addPieces({ piece: "sleep with the dead", isDisambiguation: true }, "horn (P)")
	.addPieces("three brothers' tombstone (C)", "king of the hill");

sets.addSet("skulls on the right and left", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (C)"]))
	.addPieces("twin skulls", "terrible! a skull buried in the rocky wall")
	.addPieces("sad-eyed pumpkin (P)", "king of the hill")
	.addPieces("under a chimney", "three brothers' tombstone");

sets.addSet("forgotten hut (GT)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (GT)"]))
	.addPieces("twin skulls", "stuffed nose")
	.addPieces({ piece: "sad-eyed pumpkin (P)", isDisambiguation: true }, "something bad (GT)")
	.addPieces("pumpkin family", "lost pumpkin")
	.addPieces("under a chimney", "something bad (C)")
	.addPieces("ghost train station", "something bad (GT)")
	.addPieces("sleep behind a pumpkin", "horn (C)");

sets.addSet("turns but doesn't turn", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (GT)"]))
	.addPieces("sad-eyed pumpkin (P)", "")
	.addPieces("pumpkin family", "horn (C)")
	.addPieces("pumpkins who don't get along", "stuffed nose")
	.addPieces("pumpkin triangle", "three brothers' tombstone")
	.addPieces("sleep behind a pumpkin", "three brothers' tombstone")
	.addPieces("the rocket path", "something bad (GT)")
	.addPieces("lonely tombstone", "stuffed nose")
	.addPieces("you can see it but you can't take it", "stuffed nose")
	.addPieces({ piece: "ghost train station", isDisambiguation: true }, "something bad (C)");

sets.addSet("king of the hill", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("twin skulls", "king of the hill")
	.addPieces("sad-eyed pumpkin (P)", "sad-eyed pumpkin")
	.addPieces("pumpkins who don't get along", "something bad (C)")
	.addPieces("lonely tombstone", "horn (GT)")
	.addPieces({ piece: "ghost train station", isDisambiguation: true }, "something bad (GT)")
	.addPieces({ piece: "sleep with the dead", isDisambiguation: true }, "horn (P)");

sets.addSet("it's a floor, but it's also a ceiling? (Ghost)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("the person you are waiting for", "horn (C)")
	.addPieces("sad-eyed pumpkin (P)", "something bad (C)")
	.addPieces("sleep with the dead", "three scarecrow brothers")
	.addPieces("there is only one on the cliff", "something bad (C)")
	.addPieces({ piece: "lonely tombstone", isDisambiguation: true }, "horn (P)");

sets.addSet("a farm house", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (C)"))
	.addPieces("lonely tombstone", ["stuffed nose", "horn (P)", "something bad (GT)"])
	.addPieces("sleep with the dead", "sad-eyed pumpkin")
	.addPieces("under the chimney", "something bad (C)")
	.addPieces({ piece: "chimney near some grass", isDisambiguation: true }, "something bad (?)")
	.addPieces({ piece: "three metal barrels", isDisambiguation: true }, "something bad (GT)")
	.addPieces("three brothers' tombstone (2/3 C)", "sad-eyed pumpkin (2/3)");

sets.addSet("a three-foot gap", new PieceSet("lonely tombstone", "stuffed nose"))
	.addPieces("therre is only one on the cliff", "something bad (C)")
	.addPieces("king of the hill", "lost pumpkin")
	.addPieces({ piece: "cold iron bars", isDisambiguation: true }, "something bad (C)")
	.addPieces({ piece: "sleep with the dead", isDisambiguation: true }, "something bad (GT)");

sets.addSet("laughing into tears", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces("cold iron bars", "something bad (C)")
	.addPieces("sleep with the dead", "sad-eyed pumpkin")
	.addPieces("there is only one on the cliff", "something bad (GT)")
	.addPieces("king of the hill", "stuffed nose")
	.addPieces("sleepless house", "lost pumpkin")
	.addPieces("twin skulls", "something bad (GT)");

sets.addSet("pumpkin family", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (C)"))
	.addPieces("cold iron bars", "something bad (GT)")
	.addPieces("there is only one on the cliff", "king of the hill")
	.addPieces("chimney near some grass", "stuffed nose")
	.addPieces("king of the hill", "king of the hill")
	.addPieces("three metal barrels", "in the center of a triangle")
	.addPieces({ piece: "lonely tombstone", isDisambiguation: true }, "something bad (GT)")
	.addPieces({ piece: "twin skulls", isDisambiguation: true }, "something bad (GT)")
	.addPieces({ piece: "three brothers' tombstone", isDisambiguation: true }, "something bad (GT)");

sets.addSet("three skull brothers", new PieceSet("sad-eyed pumpkin (P)", "three brothers' tombstone"))
	.addPieces("lonely tombstone", "stuffed nose")
	.addPieces("sleep with the dead", "bearded mountain")
	.addPieces("there is only one on the cliff", ["sad-eyed pumpkin", "three against three"])
	.addPieces("you can see it but you can't take it", "king of the hill")
	.addPieces("under the chimney", "bearded mountain")
	.addPieces("a tombstone near some grass", "in the center of a triangle")
	.addPieces("king of the hill", "bearded mountain")
	.addPieces("sleepless house", "bearded mountain")
	.addPieces("three metal barrels", ["sad-eyed pumpkin", "bearded mountain"])
	.addPieces({ piece: "under the tracks", isDisambiguation: true }, "horn (C)")
	.addPieces({ piece: "twin skulls", isDisambiguation: true }, "horn (P)")
	.addPieces({ piece: "three brothers' tombstone (?)", isDisambiguation: true }, "");

sets.addSet("three metal barrels", new PieceSet({ piece: "", isDisambiguation: true }, "something bad (GT)"))
	.addPieces({ piece: "sad-eyed pumpkin (P)", isDisambiguation: true }, "horn (P)")
	.addPieces("ghost train station", "horn (GT)")
	.addPieces("pumpkin triangle", "king of the hill")
	.addPieces("scramble for the emeralds", "something bad (GT)")
	.addPieces("the person you are waiting for", "horn (GT)")
	.addPieces("it's about to fall off", "sad-eyed pumpkin")
	.addPieces("under the tracks", "something bad (C)");

sets.addSet("tombstone guarded by four skulls", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (GT)"]))
	.addPieces("sad-eyed pumpkin (GT)", "stuffed nose")
	.addPieces("a place you can't jump", "horn (GT)")
	.addPieces("pumpkin family", "stuffed nose")
	.addPieces("pumpkins who don't get along", "horn (GT)")
	.addPieces("ghost train station", "three against three")
	.addPieces("pumpkin snowman", "king of the hill")
	.addPieces("it's about to fall off", "a place where flames cross")
	.addPieces({ piece: "scramble for the emeralds", isDisambiguation: true }, "something bad (2/3 GT)");

sets.addSet("under the chimney (Near)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (C)"]))
	.addPieces({ piece: "sad-eyed pumpkin (P)", isDisambiguation: true }, "something bad (C)")
	.addPieces("pumpkin family", "stuffed nose")
	.addPieces("ghost train station", "sad-eyed pumpkin")
	.addPieces("lonely tombstone", "stuffed nose")
	.addPieces({ piece: "sleep behind a pumpkin", isDisambiguation: true }, ["horn (C)", "something bad (GT)"])
	.addPieces({ piece: "sleep with the dead", isDisambiguation: true }, "horn (P)")
	.addPieces({ piece: "twin skulls", isDisambiguation: true }, "something bad (GT)");

sets.addSet("under the chimney (Far)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (P)", "something bad (C)"]))
	.addPieces("a place you can't jump", "something bad (C)")
	.addPieces("sleep behind a pumpkin", "horn (C)")
	.addPieces("the person you are waiting for finally arrived", "something bad (GT)")
	.addPieces("sad-eyed pumpkin (P)", "lost pumpkin")
	.addPieces("you can see it but you can't take it", "terrible! a skull buried in the rocky wall");

sets.addSet("double containers (GT)", new PieceSet({ piece: "", isDisambiguation: true }, ["horn (C)", "something bad (GT)"]))
	.addPieces({ piece: "sad-eyed pumpkin (8/11 GT)", isDisambiguation: true }, "")
	.addPieces("pumpkins who don't get along", "horn (C)")
	.addPieces("scarecrow's house", "something bad (GT)")
	.addPieces("under a chimney", "lost pumpkin")
	.addPieces({ piece: "the person you are waiting for", isDisambiguation: true }, "something bad (C)");

const codes: Code[] = [];
for (const key of sets.keys()) {
	const set = sets.get(key);
	if (set?.code) {
		codes.push({ piece: key, code: set.code });
	}
}

export { sets, codes };