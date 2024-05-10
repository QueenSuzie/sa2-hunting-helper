import type { Accessor, Component } from 'solid-js';
import Sets from '../components/Sets';
import sets_ng from '../data/stages/PumpkinHillNG';
import sets_ngp from '../data/stages/PumpkinHill';
import Settings from '../data/Settings';

const PumpkinHill: Component<{search: Accessor<string>, ng: boolean, settings: Settings}> = (props) => {
	return (
		<div class="pumpkin-hill-sets">
			<Sets search={props.search} settings={props.settings} sets={(props.ng ? sets_ng : sets_ngp)} />
		</div>
	);
};

export default PumpkinHill;
