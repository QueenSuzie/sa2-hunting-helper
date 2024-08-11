import { Component, For, JSX, Show } from "solid-js";
import { Pieces } from "../data/Pieces";
import { Col, Row } from "solid-bootstrap";
import Settings from "../data/Settings";
import ThirdPieces from "./ThirdPieces";
import Ambiguate from "./icons/Ambiguate";

const MAX_LENGTH = 50;

const SplitPieces: Component<{pieces: Pieces, settings: Settings, formatWords: (word: string) => string}> = (props) => {
	let i = 0;
	let length = 0;
	const new_pieces: Pieces[] = [{ second: props.pieces.second, third: [] }];
	for (const third of props.pieces.third) {
		if (length + third.piece.length > MAX_LENGTH) {
			i++;
			length = 0;
			new_pieces.push({ second: props.pieces.second, third: [] });
		}

		length += third.piece.length;
		new_pieces[i].third.push(third);
	}

	return (
		<For each={new_pieces}>
			{(pieces: Pieces) => {
				return (
					<Row class="piece-sets fw-semibold">
						<Col style={(pieces.second as JSX.CSSProperties)}>
							{ props.formatWords(pieces.second.piece)}
							<Show when={pieces.second.isDisambiguation}>
								<Ambiguate />
							</Show>
						</Col>
						<ThirdPieces settings={props.settings} pieces={pieces.third} formatWords={props.formatWords} />
					</Row>
				);
			}}
		</For>
	);
};

export default SplitPieces;