import { Accessor, Component, For, Show } from "solid-js";
import { Card, Col, Row } from "solid-bootstrap";
import { Pieces } from "../data/Pieces";
import PieceSet from "../data/PieceSet";
import PieceSets from "../data/PieceSets";
import Settings from "../data/Settings";

const Sets: Component<{search: Accessor<string>, settings: Settings, sets: PieceSets}> = (props) => {
	const upperWords = (word: string) => {
		if (!props.settings.upperCaseAllWords()) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}

		return word.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
			function(s){
				return s.toUpperCase();
			});
	};

	const includeSet = (term: string, value: string, code: string|null) => {
		term = term.trim().toLowerCase();
		if (term == "") {
			return true;
		}

		if (code != null && term === code) {
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
						<Show when={includeSet(props.search(), key.toLowerCase(), set.code)}>
							<Col>
								<Card border={props.settings.dark() ? 'black' : undefined} class={props.settings.dark() ? 'bg-card' : undefined} text={props.settings.dark() ? "white" : "dark"}>
									<Card.Header as="h5" class={`${props.settings.dark() ? 'bg-black' : 'bg-light'} fw-bolder`}>{upperWords(key)}</Card.Header>
									<Card.Body>
										<For each={set.pieces}>
											{(pieces: Pieces) => {
												return (
													<Row class="piece-sets fw-semibold">
														<Col>{ upperWords(pieces.second.piece)}</Col>
														<Col>{ upperWords(pieces.third.piece)}</Col>
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
