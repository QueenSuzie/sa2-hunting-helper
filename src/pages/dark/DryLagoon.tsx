import type { Accessor, Component } from 'solid-js';
import { sets } from '../../data/stages/dark/DryLagoon';
import Settings from '../../data/Settings';
import Sets from '../../components/Sets';

const DryLagoon: Component<{search: Accessor<string>, settings: Settings}> = (props) => {
	return (
		<div class="dry-lagoon-sets">
			<div class="text-center fs-1 fw-bold">WORK IN PROGRESS</div>
			<Sets search={props.search} settings={props.settings} sets={sets} />
		</div>
	);
};

export default DryLagoon;
