import Confirm from "./Confirm";
import { Piece, Pieces } from "./Pieces";
import { JSX } from "solid-js";

class PieceSet {
	pieces: Pieces[];
	code: string|undefined;
	confirms: Confirm[];
	cardStyle?: JSX.CSSProperties;
	cardHeaderStyle?: JSX.CSSProperties;
	cardBodyStyle?: JSX.CSSProperties;
	cardBorder?: string;

	constructor(second: Piece|string, third: Piece[]|Piece|string[]|string, code?: string) {
		this.confirms = [];
		const second_piece: Piece = (typeof second === "string") ? { piece: second, isDisambiguation: false } : second;
		this.pieces = [{ second: second_piece, third: this.thirdPieces(third) }];
		this.code = code;
	}

	addPieces(second: Piece|string, third: Piece[]|Piece|string[]|string): this {
		const second_piece: Piece = (typeof second === "string") ? { piece: second, isDisambiguation: false } : second;
		this.pieces.push({ second: second_piece, third: this.thirdPieces(third) });
		return this;
	}

	addConfirm(confirmed: string, confirmedBy: string): this {
		this.confirms.push({ confirmed: confirmed, confirmedBy: confirmedBy });
		return this;
	}

	setStyle(cardStyle?: JSX.CSSProperties, cardHeaderStyle?: JSX.CSSProperties, cardBodyStyle?: JSX.CSSProperties, cardBorder?: string) {
		this.cardStyle = cardStyle;
		this.cardHeaderStyle = cardHeaderStyle;
		this.cardBodyStyle = cardBodyStyle;
		this.cardBorder = cardBorder;
		return this;
	}

	thirdPieces(third: Piece[]|Piece|string[]|string): Piece[] {
		if (typeof third === "string") {
			return [{ piece: third, isDisambiguation: false }];
		} else if (!Array.isArray(third)) {
			return [third];
		} else if (third.length === 0) {
			return [];
		} else if (typeof third[0] !== "string") {
			return third as Piece[];
		}

		const ret: Piece[] = [];
		for (const p of third as string[]) {
			ret.push({ piece: p, isDisambiguation: false });
		}

		return ret;
	}
};

export default PieceSet;