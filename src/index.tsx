import { render } from 'solid-js/web';
import { Route, RouteSectionProps, Router } from "@solidjs/router";
import { createEffect, createSignal, on } from 'solid-js';
import { makePersisted } from '@solid-primitives/storage';
import constants from './data/Constants';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PumpkinHill from './pages/hero/PumpkinHill';
import AquaticMine from './pages/hero/AquaticMine';
import DeathChamber from './pages/hero/DeathChamber';
import MeteorHerd from './pages/hero/MeteorHerd';
import DryLagoon from './pages/dark/DryLagoon';
import EggQuarters from './pages/dark/EggQuarters';
import SecurityHall from './pages/dark/SecurityHall';
import MadSpace from './pages/dark/MadSpace';
import Settings, { Story } from './data/Settings';

import './assets/css/app.scss';

const root = document.getElementById('app');
const [search, setSearch] = createSignal('');
const [dark, setDark] = makePersisted(createSignal(false), { name: "dark-mode" });
const [upperCaseAllWords, setUpperCaseAllWords] = makePersisted(createSignal(true), { name: "uc-words" });
const [splitBigSets, setSplitBigSets] = makePersisted(createSignal(true), { name: "split-sets" });
const [disableConfirms, setDisableConfirms] = makePersisted(createSignal(false), { name: "disable-confirms" });
const [storyToggleInNav, setStoryToggleInNav] = makePersisted(createSignal(false), { name: "storyToggleInNav" });
const [story, setStory] = makePersisted(createSignal(Story.HERO), { name: "story" });

if (root != null && root.parentElement != null) {
	root.parentElement.classList.add(dark() ? "text-bg-dark" : "text-bg-light");
}

createEffect(on(dark, () => {
    if (root != null && root.parentElement != null) {
		if (dark()) {
			root.parentElement.classList.replace("text-bg-light", "text-bg-dark");
		} else {
			root.parentElement.classList.replace("text-bg-dark", "text-bg-light");
		}
	}
}));

const setApp = (props: RouteSectionProps<unknown>) => {
	return (
		<App
			search={search}
			setSearch={setSearch}
			dark={dark}
			setDark={setDark}
			upperCaseAllWords={upperCaseAllWords}
			setUpperCaseAllWords={setUpperCaseAllWords}
			splitBigSets={splitBigSets}
			setSplitBigSets={setSplitBigSets}
			disableConfirms={disableConfirms}
			setDisableConfirms={setDisableConfirms}
			storyToggleInNav={storyToggleInNav}
			setStoryToggleInNav={setStoryToggleInNav}
			story={story}
			setStory={setStory}
		>
			{props.children}
		</App>
	);
};

const settings: Settings = {
	dark: dark,
	upperCaseAllWords: upperCaseAllWords,
	splitBigSets: splitBigSets,
	disableConfirms: disableConfirms,
	story: story
};

render(() => (
	<Router base={constants.BASE_URL} root={props => setApp(props)}>
		<Route path="/" component={() => <Home settings={settings} />} />
		<Route path="/ph" component={() => <PumpkinHill search={search} settings={settings} ng={true} />} />
		<Route path="/php" component={() => <PumpkinHill search={search} settings={settings} ng={false} />} />
		<Route path="/am" component={() => <AquaticMine search={search} settings={settings} />} />
		<Route path="/dc" component={() => <DeathChamber search={search} settings={settings} />} />
		<Route path="/mh" component={() => <MeteorHerd search={search} settings={settings} />} />
		<Route path="/dl" component={() => <DryLagoon search={search} settings={settings} />} />
		<Route path="/eq" component={() => <EggQuarters search={search} settings={settings} ng={true} />} />
		<Route path="/eqp" component={() => <EggQuarters search={search} settings={settings} ng={false} />} />
		<Route path="/sh" component={() => <SecurityHall search={search} settings={settings} />} />
		<Route path="/ms" component={() => <MadSpace search={search} settings={settings} />} />
		<Route path="*404" component={NotFound} />
	</Router>
), root!);
