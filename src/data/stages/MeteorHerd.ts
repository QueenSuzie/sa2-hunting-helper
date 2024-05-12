import Code from "../Code";
import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("a container within a container", new PieceSet("floating stone", "floating in front of three tanks"))
	.addPieces("in front of a big door", "moving smoothly | spinning containers | glimpse")
	.addPieces("on a steel drilling tower (Gray)", "at the top of the tip of the ark")
	.addPieces("on a steel drilling tower (Gray)", "a container at the top of the ark")
	.addPieces("the first stage", "a glimpse of the meteorite | *HINT*")
	.addPieces("twin stars", "watching moon (Top) | glimpse")
	.addPieces("twin stars", "watching moon (Bot Low)")
	.addPieces("two stars and one moon", "powerless by itself | middle beacons")
	.addPieces("between the moon and stars", "jump from the star (far)")
	.addPieces("black boxes", "watching moon (Bot Low) | center square shadow")
	.addPieces("dangerous liquid", "next to the mini-steel beam")
	.addPieces("floating stone", "watching moon (Bot Low)")
	.addPieces("the highest rotating beacon", "watching moon (Mid)")
	.addPieces("under a star", "meteorite that flies")
	.addPieces("gun's machine", "center of a square shadow");

sets.addSet("drilling tower", new PieceSet("a moon and a missile", "spinner containers"))
	.addPieces("on a steel drilling tower (Gray)", "a glimpse of the meteorite")
	.addPieces("black boxes", "glimpse | jump from the star (Mid)")
	.addPieces("black boxes", "powerless by itself")
	.addPieces("floating stone", "jump from the star (Mid) | wandering second third")
	.addPieces("the highest rotating beacon", "jump from the star (Mid)")
	.addPieces("under a star", "watching stars (Mid)");

sets.addSet("a fast rotating meteorite (Confirms)", new PieceSet("in front of a big door", "floating in front of three tanks"))
	.addPieces("on a steel drilling tower (Yellow)", "wandering second third");

sets.addSet("a fast rotating meteorite (Left)", new PieceSet("behind something powerful", "at the top of the tip of the ark"))
	.addPieces("in front of a big door", "three tanks | cage | moving smoothly")
	.addPieces("twin stars", "glimpse | meteorite that flies | powerless (50%)")
	.addPieces("a star between three arches", "glimpse | jump from the star (Far)")
	.addPieces("on a steel drilling tower (Gray)", "moving smoothly | behind a star")
	.addPieces("on a steel drilling tower (Yellow)", "cage")
	.addPieces("gun's machine", "moving smoothly")
	.addPieces("the highest rotating beacon", "spinner containers");

sets.addSet("a fast rotating meteorite (Right)", new PieceSet("in front of a big door", "behind a star | jump from the star (Far)"))
	.addPieces("the first stage", "watching moon (Top | Bot High)")
	.addPieces("twin stars", "watching moon (Top | Bot Low)")
	.addPieces("twin stars", "center square shadow | spinner containers")
	.addPieces("a star between three arches", "watching moon (Top) | watching stars (Top)")
	.addPieces("a star between three arches", "center square shadow")
	.addPieces("on a steel drilling tower (Gray)", "watching moon (Bot High)")
	.addPieces("on a steel drilling tower (Yellow)", "watching stars (Mid)")
	.addPieces("gun's machine", "behind a star | watching stars (Mid)")
	.addPieces("between the moon and stars", "watching the moon (Mid)")
	.addPieces("black boxes", "watching stars (Bot)")
	.addPieces("dangerous water drops", "jump from the star (Far)");

sets.addSet("shortcut rocket (Left)", new PieceSet("under a star", "floating in front of three tanks"))
	.addPieces("forget to put it in a big container?", "jump from the star (Close)")
	.addPieces("evil water drops", "spinner containers")
	.addPieces("steel guardian", "powerless by itself")
	.addPieces("upper the floating tank", "middle beacons")
	.addPieces("on steel drilling tower", "top of the tip of the ark | jump from the star (Close)")
	.addPieces("gun's machine", "middle beacons")
	.addPieces("black boxes", "moving smoothly")
	.addPieces("between the moon and stars", "moving storage");

sets.addSet("shortcut rocket (Right)", new PieceSet("next to a rocket aimed at ark", "three tanks | watching moon (Mid)"))
	.addPieces("dangerous liquid (top)", "floating in front of three tanks")
	.addPieces("on a steel drilling tower (Gray)", "top of the tip of the ark")
	.addPieces("on a steel drilling tower (Gray)", "floating around the moon | jump from the star (Mid)")
	.addPieces("on a steel drilling tower (Yellow)", "cage | circle a rotating beacon")
	.addPieces("gun's machine", "jump from the star (Close)")
	.addPieces("black boxes", "glimpse | watching stars (Top) | center square shadow")
	.addPieces("floating stone", "spinner containers | floating around the moon | circle a rotating beacon");

sets.addSet("in front of the weight elevator", new PieceSet("steel guardian", "meteorite that flies"))
	.addPieces("in front of a big door (Left)", "moving storage | floating around the moon | jump from the star (Close)")
	.addPieces("the first stage", "floating around the moon | jump from the start (Mid)")
	.addPieces("twin stars", "glimpse | moving storage")
	.addPieces("twin stars", "jump from the star (Mid) | next to the mini-steel beam")
	.addPieces("on a steel drilling tower (Yellow)", "cage")
	.addPieces("gun's machine", "watching stars (Bot)")
	.addPieces("dangerous water drops", "circle the rotating beacon")
	.addPieces("floating stone", "circle the rotating beacon");

sets.addSet("next to a rocket pointed at ark", new PieceSet("behind something powerful", "container at top | moving storage"))
	.addPieces("behind something powerful", "jump (Mid | Close) | powerless by itself")
	.addPieces("in front of a big door", "watching stars (Mid) | powerless by itself")
	.addPieces("the first stage", "spinner containers")
	.addPieces("twin stars", "circle a rotating beacon | between two beacons | jump (Mid) | *HINT*")
	.addPieces("gun's machine", "circe the rotating beacon")
	.addPieces("floating stone", "middle beacons")
	.addPieces("two against one", "jump from the star (Far)");

sets.addSet("hot molten lava below", new PieceSet("steel guardian", "jump from the star (Far) | center square shadow"))
	.addPieces("dig into a small meteorite", "top of the tip of the ark | behind a star")
	.addPieces("forget to put it in a big container?", "circle a rotating beacon")
	.addPieces("forget to put it in a big container?", "jump from the star (Close | Far) | middle beacons")
	.addPieces("gun's machine", "circle a rotating beacon")
	.addPieces("gun's machine", "jump from the star (Mid)")
	.addPieces("black boxes", "watching stars (Top) | middle beacons")
	.addPieces("between the moon and stars", "middle beaocns")
	.addPieces("floating stone", "jump from the star (Close | Far)")
	.addPieces("under a star", "center square shadow");

sets.addSet("in a wooden box", new PieceSet("dig into a small meteorite", "middle beacons | three tanks"))
	.addPieces("evil water drops", "moving smoothly | spinner containers")
	.addPieces("next to a rocket aimed at the ark", "spinner containers")
	.addPieces("steel guardian", "moving smoothly")
	.addPieces("two against one", "at the tip of the top of the ark")
	.addPieces("two stars and one moon", "moving smoothly")
	.addPieces("upper the floating tank (Close)", "middle beacons")
	.addPieces("black boxes", "glimpse")
	.addPieces("between the moon and stars", "between two beacons")
	.addPieces("floating stone", "watching moon (Bot Low)")
	.addPieces("under a star", "cage");

sets.addSet("in front of a big door", new PieceSet("dig into a small meteorite", "center of a square shadow | three tanks"))
	.addPieces("two stars and one moon", "watching moon (Top)")
	.addPieces("upper the floating tank (Close)", "cage")
	.addPieces("between the moon and stars", "jump from the star (Close)")
	.addPieces("dangerous liquid (Top)", "three tanks")
	.addPieces("the highest rotating beacon", "spinner containers");

sets.addSet("triangle star", new PieceSet("next to a rocket", "three tanks (33%)"))
	.addPieces("upper the floating tanks (Close)", "jump from the star (Mid)")
	.addPieces("gun's machine", "watching moon (Top 50%) | the mini-steel beam | meteorite that flies")
	.addPieces("black boxes", "moving storage")
	.addPieces("between the moon and stars", "watching moon (Bot Low)")
	.addPieces("floating stone", "spinner containers | meteorite that flies")
	.addPieces("the highest rotating beacon", "moving storage");

const zero_point_five = new PieceSet("two against one", "jump from the star (Close)");
sets.addSet("0.5", zero_point_five);
sets.addSet("zero point five", zero_point_five)
	.addPieces("gun's machine", "moving storage | watching stars (Bot)")
	.addPieces("black boxes", "watching stars (Top) | watching moon (Bot High) | wandering second third")
	.addPieces("on a steel drilling tower (Gray)", "watching moon (Top) | moving around one tank")
	.addPieces("dangerous liquid (Top)", "watcing moon (Bot High)")
	.addPieces("the highest rotating beacong", "watching moon (Top)");

sets.addSet("on something strong", new PieceSet("gun's machine", "behind a star"))
	.addPieces("gun's machine", "cage | watching stars (Bot)")
	.addPieces("black boxes", "watching moon (Top) | between two beacons")
	.addPieces("on a steel drilling tower (Yellow)", "watching moon (Top)")
	.addPieces("dangerous water drops", "meteorite that flies")
	.addPieces("under a star", "next to the mini-steel beam");

sets.addSet("above a blue moon tank (Confirms)", new PieceSet("floating stone", "wandering second third"))
sets.addSet("above a blue moon tank (on moon)", new PieceSet("the first stage", "three tanks"))
	.addPieces("in front of a big door", "three tanks | behind a star")
	.addPieces("in front of a big door", "watching moon (Bot Low)")
	.addPieces("on a steel drilling tower (Gray)", "watching moon (Bot High)")
	.addPieces("on a steel drilling tower (Yellow)", "center square shadow")
	.addPieces("dangerous water drops", "watching moon (Bot Low)")
	.addPieces("floating stone", "watching moon (Top) | wandering second third")
	.addPieces("under a star", "watching moon (Bot Low)");

sets.addSet("above a blue moon tank (under)", new PieceSet("dangerous water drops", "three tanks"))
	.addPieces("behind something powerful", "top of the tip of the ark | cage")
	.addPieces("in front of a big door", "watching moon (Top) | powerless by itself")
	.addPieces("twin stars", "watching moon (Top) | cage")
	.addPieces("twin stars", "powerless by itself | middle beaconss")
	.addPieces("on a steel drilling tower (Gray)", "container at the top of the ark")
	.addPieces("on a steel drilling tower (Gray)", "cage | middle beaconss")
	.addPieces("on a steel drilling tower (Yellow)", "watching moon (Top) | jump from the star (Far)")
	.addPieces("on a steel drilling tower (Yellow)", "watching stars (Bot)")
	.addPieces("between the moon and stars", "watching moon (Bot Low) | watching stars (Bot)")
	.addPieces("dangerous water drops", "watching stars (Mid) | three tanks")
	.addPieces("the highest rotating beacon", "watching stars (Bot)");

sets.addSet("between the floating containers (Next to AC)", new PieceSet("in front of a big door", "jump from the star (Mid | Close) | spinner containers"))
	.addPieces("the first stage", "moving storage | powerless by itself")
	.addPieces("twin stars", "floating around the moon (50%)")
	.addPieces("a star between three arches", "floating around the moon")
	.addPieces("on a steel drilling tower (Yellow)", "behind a star")
	.addPieces("gun's machine", "jump from the star (Close) | center square shadow")
	.addPieces("black boxes", "moving storage | jump from the star (Far)")
	.addPieces("between the moon and stars", "next to a mini-steel beam")
	.addPieces("dangerous liquid", "circle the rotating beacon")
	.addPieces("floating stone", "jump from the star (Far)")
	.addPieces("the highest rotating beacon", "powerless by itself")
	.addPieces("under a star", "next to the mini-steel beam");

sets.addSet("between the floating containers (Under Box)", new PieceSet("behind something powerful", "watching stars (Top) | jump from the star (Far)"))
	.addPieces("behind something powerful", "center square shadow")
	.addPieces("the first stage", "between two beacons | meteorite that flies")
	.addPieces("in front of a big door", "moving smoothly | jump from the star (Close | Far) | middle beacons")
	.addPieces("on a steel drilling tower (Gray)", "next to the mini-steel beam")
	.addPieces("on a steel drilling tower (Yellow)", "moving smoothly | moving storage")
	.addPieces("black boxes", "center square shadow")
	.addPieces("dangerous liquid", "center square shadow")
	.addPieces("floating stone", "powerless by itself");

sets.addSet("in the floating containers", new PieceSet("behind something powerful", "floating around the moon | jump from the star (Mid)"))
	.addPieces("in front of a big door", "floating around the moon | jump from the star (Far)")
	.addPieces("the first stage", "jump from the star (Far)")
	.addPieces("twin stars", "circle a beacon | between two beacons")
	.addPieces("twin stars", "jump from the star (Close) | middle beacons")
	.addPieces("a star between three arches", "floating around the moon | between the beacon")
	.addPieces("a star between three arches", "watching stars (Mid)")
	.addPieces("gun's machine", "moving storage | between the beacon")
	.addPieces("black boxes", "jump from the star (Close | Far)")
	.addPieces("dangerous liquid", "jump from the star (Mid)");

sets.addSet("the huge shutter on the steel tower", new PieceSet("next to a rocket", "floating around the moon"))
	.addPieces("steel guardian", "powerless by itself")
	.addPieces("two against one", "center square shadow")
	.addPieces("gun's machine", "moving storage")
	.addPieces("black boxes", "behind a star | jump from the star (Mid)")
	.addPieces("dangerous liquid", "watching moon (Mid)")
	.addPieces("floating stone", "circle the rotating beacon")
	.addPieces("under a star", "jump from the star (Mid | Far)");

sets.addSet("two huge containers", new PieceSet("behind something powerful", "spinner containers"))
	.addPieces("in front of a big door", "powerless by itself")
	.addPieces("the first stage", "jump from the star (Close)")
	.addPieces("the first stage", "a mini-steel beam | watching stars (Bot)")
	.addPieces("twin stars", "a mini-steel beam | middle beacons")
	.addPieces("on a steel drilling tower (Yellow)", "meteorite that flies")
	.addPieces("gun's machine", "moving smoothly")
	.addPieces("between the moon and stars", "watching stars (Bot)")
	.addPieces("floating stone", "jump from the star (Far)");

sets.addSet("the ark's huge storage area (Close Container)", new PieceSet("two against one", "watching moon (Bot Low)", "a1"))
	.addPieces("two stars and one moon", "watching moon (Bot Low) | watching stars (Bot)")
	.addPieces("two stars and one moon", "powerless by itself")
	.addPieces("in front of a big door", "moving smoothly | spinner containers")
	.addPieces("in front of a big door", "middle beacons")
	.addPieces("the first stage", "watching moon (Top) | meteorite that flies | spinner containers")
	.addPieces("twin stars", "container at the top of the ark")
	.addPieces("twin stars", "circle a rotating beacon | jump from the star (Mid | Far)")
	.addPieces("a star between three arches", "circle a rotating beacon | watching moon (Mid) | spinner containers")
	.addPieces("on a steel drilling tower (Gray)", "moving smoothly | jump from the star (Close)")
	.addPieces("gun's machine", "jump from the star (Close) | powerless by itself")
	.addPieces("floating stone", "watching moon (Bot High) | middle beacons");

sets.addSet("the ark's huge storage area (Close Platform)", new PieceSet("in front of a big door (Left)", "three tanks", "a2"))
	.addPieces("two stars and one moon", "watching moon (Bot Low)")
	.addPieces("behind something powerful", "watching moon (Mid)")
	.addPieces("in front of a big door", "behind a star | container at the top")
	.addPieces("in front of a big door", "middle beacons")
	.addPieces("twin stars", "meteorite that flies")
	.addPieces("on top of a steel drilling tower", "watching moon (Bot Low)")
	.addPieces("gun's machine", "moving smoothly (33%)")
	.addPieces("black boxes", "behind a star")
	.addPieces("floating stone", "moving around in front of ONE tank | jump from the star (Close)")
	.addPieces("the highest rotating beacon", "center square shadow")
	.addPieces("under a star", "powerless by itself");

sets.addSet("the ark's huge storage area (Far Container)", new PieceSet("twin stars", "three tanks", "a3"))
	.addPieces("two stars and one moon", "watching stars (Bot) | watching moon (Bot | Low)")
	.addPieces("in front of a big door", "between the beacon | jump from the star (Far)")
	.addPieces("in front of a big door", "watching moon (Mid) | powerless by itself")
	.addPieces("the first stage", "jump from the star (Far) | *HINT*")
	.addPieces("twin stars", "moving smoothly | behind a star")
	.addPieces("twin stars", "container at the top of the ark | middle beacons")
	.addPieces("on top of the steel drilling tower", "jump from the star (Far)")
	.addPieces("gun's machine", "circle a rotating beacon | watching moon (Bot Low)")
	.addPieces("gun's machine", "meteorite that flies")
	.addPieces("dangerous liquid", "watching moon (Bot High)")
	.addPieces("floating stone", "powerless by itself");

sets.addSet("the ark's huge storage area (Far Platform)", new PieceSet("behind something powerful", "jump from the star (Mid)", "a4"))
	.addPieces("the first stage", "watching moon (Top) | glimpse")
	.addPieces("the first stage", "jump from the star (Far)")
	.addPieces("twin stars", "glimpse | spinner containers")
	.addPieces("black boxes", "center square shadow")
	.addPieces("between the moon and stars", "jump from the star (Far)")
	.addPieces("dangerous water drops", "center square shadow")
	.addPieces("floating stone", "watching stars (Mid)");

sets.addSet("where two stone platforms are joined", new PieceSet("in front of a big door", "behind a star | watching moon (Bot High)"))
	.addPieces("on top of the steel drilling tower (Gray)", "watching stars (Bot) | watching moon (Bot High)")
	.addPieces("on top of the steel drilling tower (Yellow)", "behind a star")
	.addPieces("the first stage", "spinner containers")
	.addPieces("twin stars", "container at the top of the ark")
	.addPieces("twin stars", "cage | watching moon (Bot Low)")
	.addPieces("dangerous water drops", "spinner containers");

sets.addSet("dangerous liquid (Mid)", new PieceSet("behind something powerful", "a mini-steel beam | center square shadow"))
	.addPieces("in front of a big door", "glimpse | jump from the star (Close)")
	.addPieces("the first stage", "jump from the star (Far 50%)")
	.addPieces("twin stars", "moving storage | circle the rotating beacon")
	.addPieces("twin stars", "jump from the star (Mid) | spinner containers")
	.addPieces("on top of the steel drilling tower (Gray)", "between two beacons | jump from the star (Mid)")
	.addPieces("on top of the steel drilling tower (Yellow)", "circle a rotating beacon | powerless by itself")
	.addPieces("black boxes", "powerless by itself")
	.addPieces("gun's machine", "moving smoothly")
	.addPieces("between the moon and stars", "watching stars (Bot)")
	.addPieces("dangerous liquid", "spinner containers | next to the mini-steel beam")
	.addPieces("dangerous water drops", "moving storage")
	.addPieces("floating stone", "watching stars (Bot)")
	.addPieces("the highest rotating beacon", "cage");

sets.addSet("dangerous liquid (Top)", new PieceSet("evil water drops", "wandering second third | moving storage"))
	.addPieces("lonely moon", "jump from the star (Mid)")
	.addPieces("too heavy to float", "three tanks | jump from the star (Close)")
	.addPieces("at the base of the rotating beacon", "watching stars (Mid 67%)")
	.addPieces("behind something powerful", "moving storage | jump from the star (Far)")
	.addPieces("the first stage", "floating around the moon")
	.addPieces("in front of a big door", "moving storage | circle the rotating beacon")
	.addPieces("in front of a big door", "between two beacons | watching stars (Mid)")
	.addPieces("twin stars", "watching stars (Top) | a mini-steel beam | powerless by itself")
	.addPieces("on top of the steel drilling tower (Gray)", "floating around the moon | powerless by itself")
	.addPieces("on top of the steel drilling tower (Yellow)", "jump from the star (Close)");

sets.addSet("dangerous water drops", new PieceSet("a moon and a missile", "watching stars (Mid) | next to a mini-steel beam"))
	.addPieces("a switch in a cage", "spinner containers | jump from the star (Far)")
	.addPieces("at the base of the rotating beacon", "jump from the star (Far) | watching moon (Mid)")
	.addPieces("two against one", "meteorite that flies")
	.addPieces("too heavy to float", "three tanks | floating around the moon")
	.addPieces("in front of a big door", "three tanks | between two beacons | watching stars (Mid)")
	.addPieces("on top of the steel drilling tower (Yellow)", "a container at the top of the ark")
	.addPieces("the first stage", "watching stars (Bot)")
	.addPieces("twin stars", "jump from the star (Close | Mid) | *HINT*");

sets.addSet("inside a container which is behind a container", new PieceSet("behind something powerful", "behind a star"))
	.addPieces("behind something powerful", "jump from the star (Far) | watching moon (Bot High)")
	.addPieces("in front of a big door", "watching stars (Top) | jump from the star (Mid)")
	.addPieces("the first stage", "jump from the star (Close) | powerless by itself | spinner containers")
	.addPieces("twin stars", "moving smoothly | jump from the star (Mid)")
	.addPieces("twin stars", "watching moon (Bot High | Low)")
	.addPieces("a star between three arches", "jump from the moon (Far)")
	.addPieces("on top of the steel drilling tower (Gray)", "moving storage | meteorite that flies")
	.addPieces("on top of the steel drilling tower (Yellow)", "moving smoothly")
	.addPieces("black boxes", "center square shadow")
	.addPieces("between the moon and stars", "middle beacons")
	.addPieces("dangerous water drops", "jump from the star (Close)")
	.addPieces("under a star", "cage");

sets.addSet("near a moon with a rotating beacon", new PieceSet("in front of a big door", "floating around the moon | between two beacons"))
	.addPieces("in front of a big door", "jump from the star (Mid | Close) | *HINT*")
	.addPieces("the first stage", "circle a rotating beacon | middle beaconss")
	.addPieces("twin stars", "cage | a mini-steel beam | powerless by itself")
	.addPieces("a star between three arches", "cage | jump from the star (Mid) | the mini-steel beam")
	.addPieces("on top of the steel drilling tower (Gray)", "jump from the star (Far) | meteorite that flies")
	.addPieces("on top of the steel drilling tower (Yellow)", "moving smoothly | glimpse")
	.addPieces("on top of the steel drilling tower (Yellow)", "jump from the star (Mid) | meteorite that flies")
	.addPieces("gun's machine", "circle the rotating beacon")
	.addPieces("black boxes", "behind a star")
	.addPieces("dangerous liquid", "center square shadow")
	.addPieces("dangerous water drops", "spinner containers")
	.addPieces("floating stone", "three tanks | circle the rotating beacon");

sets.addSet("on a rotating beacon above a blue moon", new PieceSet("behind something powerful", "circle the rotating beacon"))
	.addPieces("behind something powerful", "jump from the star (Mid | Close) | the mini-steel beam")
	.addPieces("in front of a big door", "jump from the star (Mid | Far) | meteorite that flies")
	.addPieces("the first stage", "moving smoothly | cage | powerless by itself")
	.addPieces("twin stars", "three tanks")
	.addPieces("a star between three arches", "moving smoothly")
	.addPieces("on top of the steel drilling tower (Gray)", "moving smoothly | powerless by itself")
	.addPieces("on top of the steel drilling tower (Yellow)", "moving storage | between two beacons")
	.addPieces("gun's machine", "behind a star")
	.addPieces("gun's machine", "jump from the star (Close) | powerless by itself")
	.addPieces("between the moon and stars", "three tanks | middle beacons")
	.addPieces("dangerous water drops", "cage");

const codes: Code[] = [];
for (const key of sets.keys()) {
	const set = sets.get(key);
	if (set?.code) {
		codes.push({ piece: key, code: set.code });
	}
}

export { sets, codes };