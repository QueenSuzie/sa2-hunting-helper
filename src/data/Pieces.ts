type Piece = {
	piece: string,
	isDisambiguation: boolean,
	color?: string|undefined
};

type Pieces = {
	second: Piece,
	third: Piece[]
};

export type { Pieces, Piece };
