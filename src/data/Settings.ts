import { Accessor } from "solid-js";

enum Story {
	HERO = 0,
	DARK = 1
}

type Settings = {
	dark: Accessor<boolean>,
	upperCaseAllWords: Accessor<boolean>,
	splitBigSets: Accessor<boolean>,
	disableConfirms: Accessor<boolean>,
	story: Accessor<Story>
};

export default Settings;
export { Story };