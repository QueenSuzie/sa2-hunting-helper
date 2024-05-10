import type { Accessor, Component } from 'solid-js';
import Sets from '../components/Sets';
import sets_dc from '../data/stages/DeathChamber';
import Settings from '../data/Settings';

const DeathChamber: Component<{search: Accessor<string>, settings: Settings}> = (props) => {
	return (
		<div class="death-chamber-sets">
			<Sets search={props.search} settings={props.settings} sets={sets_dc} />
		</div>
	);
};

export default DeathChamber;
