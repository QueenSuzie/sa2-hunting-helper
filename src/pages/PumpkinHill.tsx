import type { Accessor, Component } from 'solid-js';
import Sets from '../component/Sets';
import sets_ng from '../data/stages/PumpkinHillNG';
import sets_ngp from '../data/stages/PumpkinHill';

const PumpkinHill: Component<{search: Accessor<string>, ng: boolean, dark: Accessor<boolean>}> = (props) => {
	return (
		<div class="pumpkin-hill-sets">
			<Sets search={props.search} sets={(props.ng ? sets_ng : sets_ngp)} dark={props.dark} />
		</div>
	);
};

export default PumpkinHill;
