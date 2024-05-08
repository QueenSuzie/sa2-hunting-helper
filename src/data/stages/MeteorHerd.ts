import PieceSet from "../PieceSet";
import PieceSets from "../PieceSets";

const sets: PieceSets = new PieceSets();
sets.addSet("a container within a container", new PieceSet("in front of a big door", "moving smoothly"))
	.addPieces("the first stage", "a glimpse of the meteorite")
	.addPieces("twin stars", "a glimps of the meteorite")
	.addPieces("twin stars", "watching moon (Top | Bot Low)")
	.addPieces("on a steel drilling tower", "at the top of the tip of the ark")
	.addPieces("on a steel drilling tower", "a container at the top of the ark")
	.addPieces("gun's machine", "center of a square shadow");

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
	.addPieces("twin stars", "center square shadow")
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
	.addPieces("twin stars", "circle the rotating beacon | between the beacons | jump! (Mid)")
	.addPieces("gun's machine", "circe the rotating beacon");

sets.addSet("drilling tower", new PieceSet("on a steel drilling tower (Gray)", "a glimpse of the meteorite"))
	.addPieces("black boxes", "a glimpse of the meteorite")
	.addPieces("black boxes", "jump from the star! (Mid)")
	.addPieces("black boxes", "powerless by itself");

sets.addSet("in a wooden box", new PieceSet("black boxes", "a glimpse of the meteorite"))
sets.addSet("in front of a big door", new PieceSet("dig into a small meteorite", "center of a square shadow"));

sets.addSet("hot molten lava below", new PieceSet("gun's machine", "circle the rotating beacone"))
	.addPieces("gun's machine", "jump from the star! (Mid)")
	.addPieces("black boxes", "watching stars (Top | Mid)");

sets.addSet("tirangle star", new PieceSet("next to a rocket", "three tanks (check)"))
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

sets.addSet("", new PieceSet("", ""))
	.addPieces("", "")
	.addPieces("", "");

export default sets;