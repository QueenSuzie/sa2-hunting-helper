import type { Accessor, Component } from 'solid-js';
import { sets } from '../data/stages/AquaticMine';
import { Card, Col, Row } from 'solid-bootstrap';
import Settings from '../data/Settings';
import Sets from '../components/Sets';

const AquaticMine: Component<{search: Accessor<string>, settings: Settings}> = (props) => {
	return (
		<div class="aquatic-mine-sets">
			<Row class="mb-4">
				<Col sm={0} md={2}></Col>
				<Col>
					<Card>
						<Card.Body>For now this will be used only as a mine cart dumping area bail out tool. If you get it, left is p1 and right is p3.</Card.Body>
					</Card>
				</Col>
				<Col sm={0} md={2}></Col>
			</Row>
			<Sets search={props.search} settings={props.settings} sets={sets} />
		</div>
	);
};

export default AquaticMine;
