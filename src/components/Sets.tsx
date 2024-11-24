import { Accessor, Component, For, JSX, Show } from "solid-js";
import { Card, Col, Row } from "solid-bootstrap";
import { Pieces } from "../data/Pieces";
import PieceSet from "../data/PieceSet";
import PieceSets from "../data/PieceSets";
import Settings from "../data/Settings";
import ThirdPieces from "./ThirdPieces";
import SplitPieces from "./SplitPieces";
import Confirm from "../data/Confirm";
import Ambiguate from "./Ambiguate";

const Sets: Component<{search: Accessor<string>, settings: Settings, sets: PieceSets}> = (props) => {
	const upperWords = (word: string) => {
		if (!props.settings.upperCaseAllWords()) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}

		return word.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/gu,
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

	const includeSet = (term: string, value: string, code: string|undefined) => {
		term = term.trim().toLowerCase();
		if (term == "") {
			return true;
		}

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
								<Card
									border={
										set.cardBorder ?
											set.cardBorder :
											props.settings.dark() ? 'black' : undefined
									}
									class={props.settings.dark() ? 'bg-card' : undefined}
									text={props.settings.dark() ? "white" : "dark"}
									style={set.cardStyle}
								>
									<Card.Header as="h5" class={`${props.settings.dark() ? 'bg-black' : 'bg-light'} fw-bolder`} style={set.cardHeaderStyle}>{upperWords(key)}</Card.Header>
									<Card.Body style={set.cardBodyStyle}>
										<Show when={!props.settings.disableConfirms() && set.confirms.length > 0}>
											<div class={`border border-${props.settings.dark() ? 'light' : 'dark'} rounded p-2`}>
												<h3 class="border-bottom">Confirms</h3>
												<For each={set.confirms}>
													{(confirm: Confirm) => {
														return (
															<Row>
																<Col md={4} class="text-end fw-semibold">{ upperWords(confirm.confirmed) }</Col>
																<Col md={3} class="text-center"><i>is confirmed by</i></Col>
																<Col md={5} class="text-start fw-semibold">{ upperWords(confirm.confirmedBy) }</Col>
															</Row>
														);
													}}
												</For>
											</div>
										</Show>
										<For each={set.pieces}>
											{(pieces: Pieces) => {
												return (
													<>
														<Show when={props.settings.splitBigSets()}>
															<SplitPieces pieces={pieces} settings={props.settings} formatWords={upperWords} />
														</Show>
														<Show when={!props.settings.splitBigSets()}>
															<Row class="piece-sets fw-semibold">
																<Col style={(pieces.second as JSX.CSSProperties)}>
																	{ upperWords(pieces.second.piece) }
																	<Show when={pieces.second.isDisambiguation}>
																		<Ambiguate />
																	</Show>
																</Col>
																<ThirdPieces settings={props.settings} pieces={pieces.third} formatWords={upperWords} />
															</Row>
														</Show>
													</>
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
