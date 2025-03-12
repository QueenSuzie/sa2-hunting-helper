import type { Accessor, Component } from 'solid-js';
import { sets } from '../../data/stages/dark/SecurityHall';
import Settings from '../../data/Settings';
import Sets from '../../components/Sets';

const SecurityHall: Component<{search: Accessor<string>, settings: Settings}> = (props) => {
	return (
		<div class="security-hall-sets">
			<div class="text-center fs-1 fw-bold">WORK IN PROGRESS</div>
			<Sets search={props.search} settings={props.settings} sets={sets} />
		</div>
	);
};

export default SecurityHall;
