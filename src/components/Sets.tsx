import { Accessor, Component, For, JSX, Show } from "solid-js";
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

	const includeSetOld = (term: string, value: string) => {
		const words: string[] = term.split(" ");
		for (const word of words) {
			if (!value.includes(word)) {
				return false;
			}
		}

		return true;
	};

	const includeSet = (term: string, value: string, code: string|null) => {
		term = term.trim().toLowerCase();
		if (term == "") {
			return true;
		}

		console.log(code);
		if (code != null && term === code) {
			return true;
		}

		if (props.settings.useOldSearch()) {
			return includeSetOld(term, value);
		}

		const piece_words: string[] = value.split(" ");
		const search_words: string[] = term.split(" ");
		for (let piece_word of piece_words) {
			piece_word = piece_word.replace("(", "").replace(")", "");
			for (const [search_pos, search] of search_words.entries()) {
				const search: string = search_words[search_pos];
				if (piece_word.startsWith(search)) {
					search_words.splice(search_pos, 1);
					break;
				}
			}

			if (search_words.length === 0) {
				return true;
			}
		}

		return search_words.length === 0;
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
														<Col style={(pieces.second as JSX.CSSProperties)}>{ upperWords(pieces.second.piece)}</Col>
														<Col style={(pieces.third as JSX.CSSProperties)}>{ upperWords(pieces.third.piece)}</Col>
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
