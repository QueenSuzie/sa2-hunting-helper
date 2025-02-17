import { Accessor } from "solid-js";

type Settings = {
	dark: Accessor<boolean>,
	upperCaseAllWords: Accessor<boolean>,
	splitBigSets: Accessor<boolean>,
	disableConfirms: Accessor<boolean>
};

export default Settings;