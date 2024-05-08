import type { Accessor, Component } from 'solid-js';
import PieceSets from '../data/PieceSets';
import PieceSet from '../data/PieceSet';
import Sets from '../component/Sets';

const sets: PieceSets = new PieceSets();

const DeathChamber: Component<{search: Accessor<string>, dark: Accessor<boolean>}> = (props) => {
	return (
		<div class="pumpkin-hill-sets">
			<Sets search={props.search} sets={sets} dark={props.dark} />
		</div>
	);
};

export default DeathChamber;
