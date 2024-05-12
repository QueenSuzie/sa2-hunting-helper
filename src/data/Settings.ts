import { Accessor } from "solid-js";

type Settings = {
	dark: Accessor<boolean>,
	upperCaseAllWords: Accessor<boolean>,
	useOldSearch: Accessor<boolean>
};

export default Settings;