import type { Accessor, Component } from 'solid-js';
import { sets } from '../data/stages/MeteorHerd';
import Settings from '../data/Settings';
import Sets from '../components/Sets';

const MeteorHerd: Component<{search: Accessor<string>, settings: Settings}> = (props) => {
	return (
		<div class="meteor-herd-sets">
			<Sets search={props.search} settings={props.settings} sets={sets} />
		</div>
	);
};

export default MeteorHerd;
