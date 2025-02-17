import { Component } from "solid-js";
import ambiguate_icon from "../assets/icons/ambiguate.svg";

const Ambiguate: Component<{floatRight?: boolean}> = (props) => {
	const floatRight: boolean = props.floatRight == null ? true : props.floatRight;
	return (<img src={ambiguate_icon} alt="Ambiguate" style={{ width: "40px", float: `${floatRight ? 'right' : 'initial'}` }} />)
}

export default Ambiguate;