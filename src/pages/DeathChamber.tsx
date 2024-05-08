import type { Accessor, Component } from 'solid-js';
import Sets from '../component/Sets';
import sets_dc from '../data/stages/DeathChamber';

const DeathChamber: Component<{search: Accessor<string>, dark: Accessor<boolean>}> = (props) => {
	return (
		<div class="death-chamber-sets">
			<Sets search={props.search} sets={sets_dc} dark={props.dark} />
		</div>
	);
};

export default DeathChamber;
