import { Component, JSX } from "solid-js";
import { Piece } from "../data/Pieces";
import { Col } from "solid-bootstrap";
import Settings from "../data/Settings";

const ThirdPieces: Component<{pieces: Piece[], settings: Settings, formatWords: (word: string) => string}> = (props) => {
	return (
		<Col style={((props.pieces[0] ?? []) as JSX.CSSProperties)}>
			{ props.formatWords(props.pieces.map((piece) => piece.piece).join(' | '))}
		</Col>
	);
};

export default ThirdPieces;