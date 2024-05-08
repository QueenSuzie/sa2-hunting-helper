import type { Accessor, Component } from 'solid-js';
import Sets from '../component/Sets';
import sets_mh from '../data/stages/MeteorHerd';

const MeteorHerd: Component<{search: Accessor<string>, dark: Accessor<boolean>}> = (props) => {
	return (
		<div class="meteor-herd-sets">
			<Sets search={props.search} sets={sets_mh} dark={props.dark} />
		</div>
	);
};

export default MeteorHerd;
