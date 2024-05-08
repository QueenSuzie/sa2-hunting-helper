import type { Accessor, Component } from 'solid-js';
import PieceSets from '../data/PieceSets';
import Sets from '../component/Sets';
import PieceSet from '../data/PieceSet';

const setsNG: PieceSets = new PieceSets();
setsNG.addSet("shady place", new PieceSet("", "horn (P)"))
	.addPieces("", "something bad (GT)");

setsNG.addSet("three brothers' tombstone", new PieceSet("", "horn (C)"))
	.addPieces("", "something bad (GT)");

const setsNGP: PieceSets = new PieceSets();

const PumpkinHill: Component<{search: Accessor<string>, ng: boolean, dark: Accessor<boolean>}> = (props) => {
	return (
		<div class="pumpkin-hill-sets">
			<Sets search={props.search} sets={(props.ng ? setsNG : setsNGP)} dark={props.dark} />
		</div>
	);
};

export default PumpkinHill;
