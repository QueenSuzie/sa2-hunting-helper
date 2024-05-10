import type { Accessor, Component } from 'solid-js';
import Sets from '../components/Sets';
import sets_mh from '../data/stages/MeteorHerd';
import Settings from '../data/Settings';

const MeteorHerd: Component<{search: Accessor<string>, settings: Settings}> = (props) => {
	return (
		<div class="meteor-herd-sets">
			<Sets search={props.search} settings={props.settings} sets={sets_mh} />
		</div>
	);
};

export default MeteorHerd;
