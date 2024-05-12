import type { Accessor, Component } from 'solid-js';
import { sets as ng } from '../data/stages/PumpkinHillNG';
import { sets as ngp } from '../data/stages/PumpkinHill';
import Sets from '../components/Sets';
import Settings from '../data/Settings';

const PumpkinHill: Component<{search: Accessor<string>, ng: boolean, settings: Settings}> = (props) => {
	return (
		<div class="pumpkin-hill-sets">
			<Sets search={props.search} settings={props.settings} sets={(props.ng ? ng : ngp)} />
		</div>
	);
};

export default PumpkinHill;
