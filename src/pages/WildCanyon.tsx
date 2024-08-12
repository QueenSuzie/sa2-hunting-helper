import { type Accessor, type Component } from 'solid-js';
import { SetStoreFunction } from 'solid-js/store';
import Settings from '../data/Settings';
import PieceDB from '../components/PieceDB';

const WildCanyon: Component<{search: Accessor<string>, settings: Settings, pieceDB: any, setPieceDB: SetStoreFunction<any>}> = (props) => (
	<PieceDB
		stage="wild-canyon"
		search={props.search}
		settings={props.settings}
		pieceDB={props.pieceDB}
		setPieceDB={props.setPieceDB}
	/>
);

export default WildCanyon;
