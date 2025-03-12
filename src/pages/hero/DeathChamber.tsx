import type { Accessor, Component } from 'solid-js';
import { sets } from '../../data/stages/hero/DeathChamber';
import Settings from '../../data/Settings';
import Sets from '../../components/Sets';

const DeathChamber: Component<{search: Accessor<string>, settings: Settings}> = (props) => {
	return (
		<div class="death-chamber-sets">
			<Sets search={props.search} settings={props.settings} sets={sets} />
		</div>
	);
};

export default DeathChamber;
