import { Component, JSX } from "solid-js";

const Icon: Component<{
	fill?: string,
	height?: string,
	width?: string,
	button?: boolean
	onClick?: JSX.EventHandlerUnion<SVGSVGElement, MouseEvent>
	children?: JSX.Element
	viewBox?: string
}> = (props) => {
	const fill: string = props.fill != null ? props.fill : "#5f6368";
	const height: string = props.height != null ? props.height : "24px";
	const width: string = props.width != null ? props.width : "24px";
	const button: boolean = props.button != null ? props.button : false;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={props.viewBox}
			height={height}
			width={width}
			classList={{ ["button-icon"]: button }}
			fill={!button ? fill : undefined}
			onClick={props.onClick}
		>
			{props.children}
		</svg>
	);
};

export default Icon;