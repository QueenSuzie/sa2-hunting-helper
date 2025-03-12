import type { Accessor, Component } from 'solid-js';
import { sets as ng } from '../../data/stages/dark/EggQuartersNG';
import { sets as ngp } from '../../data/stages/dark/EggQuarters';
import Sets from '../../components/Sets';
import Settings from '../../data/Settings';

const EggQuarters: Component<{search: Accessor<string>, ng: boolean, settings: Settings}> = (props) => {
	return (
		<div class="egg-quarters-sets">
			<div class="text-center fs-1 fw-bold">WORK IN PROGRESS</div>
			<Sets search={props.search} settings={props.settings} sets={(props.ng ? ng : ngp)} />
		</div>
	);
};

export default EggQuarters;
