import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("a container within a container", new PieceSet("in front of a big door", "moving smoothly"))
	.addPieces("the first stage", "a glimpse of the meteorite | *HINT*")
	.addPieces("twin stars", "a glimps of the meteorite")
	.addPieces("twin stars", "watching moon (Top | Bot Low)")
	.addPieces("on a steel drilling tower", "at the top of the tip of the ark")
	.addPieces("on a steel drilling tower", "a container at the top of the ark")
	.addPieces("gun's machine", "center of a square shadow");

sets.addSet("drilling tower", new PieceSet("on a steel drilling tower (Gray)", "a glimpse of the meteorite"))
	.addPieces("black boxes", "a glimpse of the meteorite")
	.addPieces("black boxes", "jump from the star! (Mid)")
	.addPieces("black boxes", "powerless by itself");

sets.addSet("a fast rotating meteorite (Left)", new PieceSet("behind something powerful", "at the top of the tip of the ark"))
	.addPieces("in front of a big door", "three tanks | cage | moving smoothly")
	.addPieces("twin stars", "glimpse | meteorite that flies | powerless")
	.addPieces("a star between three arches", "glimpse | jump from the star! (Far)")
	.addPieces("on a steel drilling tower (Gray)", "moving smoothly | behind a star")
	.addPieces("on a steel drilling tower (Yellow)", "cage")
	.addPieces("gun's machine", "moving smoothly");

sets.addSet("a fast rotating meteorite (Right)", new PieceSet("in front of a big door", "behind a star | jump from the star! (Far)"))
	.addPieces("the first stage", "watching moon (Top | Bot High)")
	.addPieces("twin stars", "watching moon (Top | Bot Low)")
	.addPieces("twin stars", "center square shadow | *HINT*")
	.addPieces("a star between three arches", "watching moon (Top) | watching stars (Top)")
	.addPieces("a star between three arches", "square shadow")
	.addPieces("on a steel drilling tower (Gray)", "watching moon (Bot High)")
	.addPieces("on a steel drilling tower (Yellow)", "watching stars (Mid)")
	.addPieces("gun's machine", "behind a star | watching stars (Mid)")
	.addPieces("black boxes", "watching stars (Bot)");

sets.addSet("shortcut rocket (Left)", new PieceSet("forget to put it in a big container?", "jump from the star! (Close)"))
	.addPieces("steel guardian", "powerless by itself")
	.addPieces("upper the floating tank", "middle of the rotating beacon")
	.addPieces("on steel drilling tower", "top of the tip of the ark | jump from the star! (Close)")
	.addPieces("gun's machine", "middle of the rotating beacon")
	.addPieces("black boxes", "moving smoothly");

sets.addSet("shortcut rocket (Right)", new PieceSet("next to a rocket aimed at ark", "three tanks | watching moon (Mid)"))
	.addPieces("on a steel drilling tower (Gray)", "top of the tip of the ark")
	.addPieces("on a steel drilling tower (Gray)", "floating around the moon | jump from the star! (Mid)")
	.addPieces("on a steel drilling tower (Yellow)", "cage | circle a rotating beacon")
	.addPieces("gun's machine", "jump from the star! (Close)")
	.addPieces("black boxes", "glimpse of the meteorite");

sets.addSet("next to a rocket pointed at ark", new PieceSet("behind something powerful", "container at top"))
	.addPieces("behind something powerful", "jump (Mid | Close) | powerless by itself")
	.addPieces("in front of a big door", "watching stars (Mid) | powerless by itself")
	.addPieces("the first stage", "surrounded by spinner containers")
	.addPieces("twin stars", "circle a rotating beacon | between the beacons | jump! (Mid) | *HINT*")
	.addPieces("gun's machine", "circe the rotating beacon");

sets.addSet("in a wooden box", new PieceSet("black boxes", "a glimpse of the meteorite"))
sets.addSet("in front of a big door", new PieceSet("dig into a small meteorite", "center of a square shadow"));

sets.addSet("hot molten lava below", new PieceSet("gun's machine", "circle a rotating beacon"))
	.addPieces("gun's machine", "jump from the star! (Mid)")
	.addPieces("black boxes", "watching stars (Top | Mid)");

sets.addSet("triangle star", new PieceSet("next to a rocket", "three tanks (check)"))
	.addPieces("gun's machine", "watching moon (Top 50%)")
	.addPieces("black boxes", "moving around storage");

const zero_point_five = new PieceSet("gun's machine", "moving around storage | watching stars (Bot)");
sets.addSet("0.5", zero_point_five);
sets.addSet("zero point five", zero_point_five)
	.addPieces("black boxes", "moving around storage | watching moon (Bot High)")
	.addPieces("on a steel drilling tower", "watching moon (Top) | moving around one tank");

sets.addSet("on something strong", new PieceSet("gun's machine", "behind a star"))
	.addPieces("gun's machine", "cage | watching stars (Bot)")
	.addPieces("black boxes", "watching moon (Top) | between the beacons")
	.addPieces("on a steel drilling tower", "watching moon (Top)");

sets.addSet("above a blue moon tank (on moon)", new PieceSet("in front of a big door", "three tanks | behind a star"))
	.addPieces("in front of a big door", "watching moon (Bot Low)")
	.addPieces("the first stage", "three tanks")
	.addPieces("on a steel drilling tower (Gray)", "watching moon (Bot High)")
	.addPieces("on a steel drilling tower (Yellow)", "center square shadow");

sets.addSet("above a blue moon tank (under)", new PieceSet("behind something powerful", "top of the tip of the ark | cage"))
	.addPieces("in front of a big door", "watching moon (Top) | powerless by itself")
	.addPieces("twin stars", "watching moon (Top) | cage")
	.addPieces("twin stars", "powerless by itself | middle of the rotating beacons")
	.addPieces("on a steel drilling tower (Gray)", "container at the top of the ark")
	.addPieces("on a steel drilling tower (Gray)", "cage | middle of the rotating beacons")
	.addPieces("on a steel drilling tower (Yellow)", "watching moon (Top) | jump from the star (Far)")
	.addPieces("on a steel drilling tower (Yellow)", "watching stars (Bot)");

sets.addSet("between floating containers (AC)", new PieceSet("in front of a big door", "jump from the star (Mid | Close) | *HINT*"))
	.addPieces("the first stage", "moving storage | powerless by itself")
	.addPieces("twin stars", "floating around the moon (50/50)")
	.addPieces("a star between three arches", "floating around the moon")
	.addPieces("on a steel drilling tower (Yellow)", "behind a star")
	.addPieces("gun's machine", "jump from a star (Close) | center square shadow")
	.addPieces("black boxes", "moving storage | jump from a star (Far)");

sets.addSet("between floating containers (Under Box)", new PieceSet("behind something powerful", "watching stars (Top) | jump from a star (Far)"))
	.addPieces("behind something powerful", "center square shadow")
	.addPieces("the first stage", "between the beacons | meteorite that flies")
	.addPieces("in front of a big door", "moving smoothly | jump from a star (All)")
	.addPieces("on a steel drilling tower (Gray)", "next to the mini-steel beam")
	.addPieces("on a steel drilling tower (Yellow)", "moving smoothly | moving storage");

sets.addSet("in the floating containers", new PieceSet("behind something powerful", "floating around the moon | jump from a star (Mid)", "xx1"))
	.addPieces("in front of a big door", "floating around the moon | jump from a star (Far)")
	.addPieces("the first stage", "jump from a star (Far)")
	.addPieces("twin stars", "circle a beacon | between the beacons")
	.addPieces("twin stars", "jump from a star (Close | Mid)")
	.addPieces("a star between three arches", "floating around the moon | between the beacon")
	.addPieces("a star between three arches", "watching stars (Mid)")
	.addPieces("gun's machine", "moving storage | between the beacon")
	.addPieces("black boxes", "jump from a star (Close | Far)");

sets.addSet("the huge shutter on the steel tower", new PieceSet("next to a rocket", "floating around the moon"))
	.addPieces("steel guardian", "powerless by itself")
	.addPieces("two against one", "center square shadow")
	.addPieces("gun's machine", "moving storage")
	.addPieces("black boxes", "behind a star | jump from a star (Mid)");

sets.addSet("two huge containers", new PieceSet("behind something powerful", "surrounded by spinner"))
	.addPieces("the first stage", "jump from a star (Close)")
	.addPieces("the first stage", "a mini-steel beam | watching stars (Bot)")
	.addPieces("twin stars", "a mini-steel beam | middle of the rotating beacon")
	.addPieces("on a steel drilling tower (Yellow)", "use a meteorite that flies")
	.addPieces("gun's machine", "moving smoothly");

sets.addSet("the ark's huge storage area (Close Container)", new PieceSet("two against one", "watching moon (Bot Low)"))
	.addPieces("two stars and one moon", "watching moon (Bot Low) | watching stars (Bot)")
	.addPieces("two stars and one moon", "powerless by itself")
	.addPieces("in front of a big door", "moving smoothly | spinner containers")
	.addPieces("in front of a big door", "middle of the rotating beacon")
	.addPieces("the first stage", "watching moon (Top) | meteorite that flies")
	.addPieces("twin stars", "container at the top of the ark")
	.addPieces("twin stars", "circle a rotating beacon | jump from the star (Mid | Far)")
	.addPieces("a star between three arches", "circle a rotating beacon | watching moon (Mid) | *HINT*")
	.addPieces("on a steel drilling tower (Gray)", "moving smoothly | jump from the star (Close)")
	.addPieces("gun's machine", "jump from the star (Close) | powerless by itself");

sets.addSet("the ark's huge storage area (Close Platform)", new PieceSet("two stars and one moon", "watching moon (Bot Low)"))
	.addPieces("behind something powerful", "watching moon (Mid)")
	.addPieces("in front of a big door", "behind a star | container at the top")
	.addPieces("in front of a big door", "middle of the rotating beacon")
	.addPieces("twin stars", "use a meteorite that flies")
	.addPieces("on top of a steel drilling tower", "watching moon (Bot Low)")
	.addPieces("gun's machine", "moving smoothly (1/3)")
	.addPieces("black boxes", "behind a star");

sets.addSet("the ark's huge storage area (Far Container)", new PieceSet("two stars and one moon", "watching stars (Bot) | watching moon (Bot | Low)"))
	.addPieces("in front of a big door", "between the beacon | jump from the star (Far)")
	.addPieces("in front of a big door", "watching moon (Mid) | powerless by itself")
	.addPieces("the first stage", "jump from the star (Far) | *HINT*")
	.addPieces("twin stars", "moving smoothly | behind a star")
	.addPieces("twin stars", "container at the top of the ark")
	.addPieces("on top of the steel drilling tower", "jump from the star (Far)")
	.addPieces("gun's machine", "circle a rotating beacon | watching moon (Bot Low)")
	.addPieces("gun's machine", "meteorite that flies");

sets.addSet("the ark's huge storage area (Far Platform)", new PieceSet("behind something powerful", "jump from the star (Mid)"))
	.addPieces("the first stage", "watching moon (Top) | glimpse")
	.addPieces("the first stage", "jump from the star (Far)")
	.addPieces("twin stars", "a glimpse of the meteorite")
	.addPieces("black boxes", "center square shadow");

sets.addSet("where two stone platforms are joined", new PieceSet("in front of a big door", "behind a star | watching moon (Bot High)"))
	.addPieces("on top of the steel drilling tower (Gray)", "watching stars (Bot) | watching moon (Bot High)")
	.addPieces("on top of the steel drilling tower (Yellow)", "behind a star")
	.addPieces("the first stage", "surrounded by spinner containers")
	.addPieces("twin stars", "container at the top of the ark")
	.addPieces("twin stars", "cage | watching moon (Bot Low)");

sets.addSet("dangerous liquid (Mid)", new PieceSet("behind something powerful", "a mini-steel beam | center square shadow"))
	.addPieces("in front of a big door", "glimpse | jump from the star (Close)")
	.addPieces("the first stage", "jump from the star (Far 50/50)")
	.addPieces("twin stars", "moving storage | circle the rotating beacon")
	.addPieces("twin stars", "jump from the star (Mid) | *HINT*")
	.addPieces("on top of the steel drilling tower (Gray)", "between the beacons | jump from the star (Mid)")
	.addPieces("on top of the steel drilling tower (Yellow)", "circle a rotating beacon | powerless by itself")
	.addPieces("black boxes", "powerless by itself")
	.addPieces("gun's machine", "moving smoothly");

sets.addSet("dangerous liquid (Top)", new PieceSet("evil water drops", "moving storage"))
	.addPieces("lonely moon", "jump from the star (Mid)")
	.addPieces("too heavy to float", "three tanks | jump from the star (Close)")
	.addPieces("at the base of the rotating beacon", "watching stars (Mid 2/3)")
	.addPieces("behind something powerful", "moving storage | jump from the star (Far)")
	.addPieces("the first stage", "floating around the moon")
	.addPieces("in front of a big door", "moving storage | circle the rotating beacon")
	.addPieces("in front of a big door", "between the beacons | watching stars (Mid)")
	.addPieces("twin stars", "watching stars (Top) | a mini-steel beam | *HINT*")
	.addPieces("on top of the steel drilling tower (Gray)", "floating around the moon | powerless by itself")
	.addPieces("on top of the steel drilling tower (Yello)", "jump from the star (Close)");

sets.addSet("inside a container which is behind a container", new PieceSet("behind something powerful", "behind a star"))
	.addPieces("behind something powerful", "jump from the star (Far) | watching moon (Bot High)")
	.addPieces("in front of a big door", "watching stars (Top) | jump from the star (Mid)")
	.addPieces("the first stage", "jump from the star (Close) | powerless by itself | *HINT*")
	.addPieces("twin stars", "moving smoothly | jump from the star (Mid)")
	.addPieces("twin stars", "watching moon (Bot High | Low)")
	.addPieces("a star between three arches", "jump from the moon (Far)")
	.addPieces("on top of the steel drilling tower (Gray)", "moving storage | meteorite that flies")
	.addPieces("on top of the steel drilling tower (Yellow)", "moving smoothly")
	.addPieces("black boxes", "center square shadow");

sets.addSet("near a moon with a rotating beacon", new PieceSet("in front of a big door", "floating around the moon"))
	.addPieces("in front of a big door", "jump from the star (Mid | Close) | *HINT*")
	.addPieces("the first stage", "circle a rotating beacon | middle of the rotating beacons")
	.addPieces("twin stars", "cage | a mini-steel beam | powerless by itself")
	.addPieces("a star between three arches", "cage | jump from the star (Mid) | the mini-steel beam")
	.addPieces("on top of the steel drilling tower (Gray)", "jump from the star (Far) | meteorite that flies")
	.addPieces("on top of the steel drilling tower (Yellow)", "moving smoothly | glimpse")
	.addPieces("on top of the steel drilling tower (Yellow)", "jump from the star (Mid) | meteorite that flies")
	.addPieces("gun's machine", "circle the rotating beacon")
	.addPieces("black boxes", "behind a star");

sets.addSet("on a rotating beacon above a blue moon", new PieceSet("behind something powerful", "circle the rotating beacon"))
	.addPieces("behind something powerful", "jump from the star (Mid | Close) | the mini-steel beam")
	.addPieces("in front of a big door", "jump from the star (Mid | Far) | meteorite that flies")
	.addPieces("the first stage", "moving smoothly | cage | powerless by itself")
	.addPieces("twin stars", "three tanks")
	.addPieces("a star between three arches", "moving smoothly")
	.addPieces("on top of the steel drilling tower (Gray)", "moving smoothly | powerless by itself")
	.addPieces("on top of the steel drilling tower (Yellow)", "moving storage | between the beacons")
	.addPieces("gun's machine", "behind a star")
	.addPieces("gun's machine", "jump from the star (Close) | powerless by itself");

export default sets;