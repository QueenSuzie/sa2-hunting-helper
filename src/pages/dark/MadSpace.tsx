import type { Accessor, Component } from 'solid-js';
import { sets } from '../../data/stages/dark/MadSpace';
import Settings from '../../data/Settings';
import Sets from '../../components/Sets';

const MadSpace: Component<{search: Accessor<string>, settings: Settings}> = (props) => {
	return (
		<div class="mad-space-sets">
			<div class="text-center fs-1 fw-bold">WORK IN PROGRESS</div>
			<Sets search={props.search} settings={props.settings} sets={sets} />
		</div>
	);
};

export default MadSpace;
