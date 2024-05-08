import { Accessor, Component, For, Show } from "solid-js";
import { Card, Col, Row } from "solid-bootstrap";
import PieceSets from "../data/PieceSets";
import PieceSet from "../data/PieceSet";
import Pieces from "../data/Pieces";

const Sets: Component<{search: Accessor<string>, sets: PieceSets, dark: Accessor<boolean>}> = (props) => {
	const upperWords = (word: string) => {
		return word.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
			function(s){
				return s.toUpperCase();
			});
	};

	const includeSet = (term: string, value: string) => {
		term = term.trim().toLowerCase();
		if (term == "") {
			return true;
		}

		const words: string[] = term.split(" ");
		for (const word of words) {
			if (!value.includes(word)) {
				return false;
			}
		}

		return true;
	};

	return (
		<Row class="row-cols-auto gy-4 d-flex justify-content-center">
			<For each={Array.from(props.sets.keys())}>
				{(key: string) => {
					const set: PieceSet|undefined = props.sets.get(key);
					if (set == undefined) {
						return <></>;
					}

					return (
						<Show when={includeSet(props.search(), key.toLowerCase())}>
							<Col>
								<Card border={props.dark() ? 'black' : undefined} class={props.dark() ? 'bg-card' : undefined} text={props.dark() ? "white" : "dark"}>
									<Card.Header as="h5" class={`${props.dark() ? 'bg-black' : 'bg-light'} fw-bolder`}>{upperWords(key)}</Card.Header>
									<Card.Body>
										<For each={set.pieces}>
											{(pieces: Pieces) => {
												return (
													<Row class="piece-sets fw-semibold">
														<Col>{ pieces.second == '' ? 'ANYTHING' : upperWords(pieces.second)}</Col>
														<Col>{ upperWords(pieces.third)}</Col>
													</Row>
												);
											}}
										</For>
									</Card.Body>
								</Card>
							</Col>
						</Show>
					);
				}}
			</For>
		</Row>
	);
};

export default Sets;
