type Piece = {
	piece: string,
	color?: string|undefined,
	"background-color"?: string|undefined
};

type Pieces = {
	second: Piece,
	third: Piece
};

export type { Pieces, Piece };
