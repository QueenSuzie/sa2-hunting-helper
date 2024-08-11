import { Component, JSX } from "solid-js";

type Icon = Component<{
	fill?: string,
	height?: string,
	width?: string,
	button?: boolean
	onClick?: JSX.EventHandlerUnion<SVGSVGElement, MouseEvent>
}>;

export default Icon;