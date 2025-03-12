import type { Accessor, Component } from 'solid-js';
import { sets } from '../../data/stages/dark/DryLagoon';
import Settings from '../../data/Settings';
import Sets from '../../components/Sets';

const DryLagoon: Component<{search: Accessor<string>, settings: Settings}> = (props) => {
	return (
		<div class="dry-lagoon-sets">
			<Sets search={props.search} settings={props.settings} sets={sets} />
		</div>
	);
};

export default DryLagoon;
