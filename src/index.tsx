/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, RouteSectionProps, Router } from "@solidjs/router";
import { createEffect, createSignal, on } from 'solid-js';
import { makePersisted } from '@solid-primitives/storage';
import constants from './data/Constants';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PumpkinHill from './pages/PumpkinHill';
import DeathChamber from './pages/DeathChamber';
import MeteorHerd from './pages/MeteorHerd';
import Settings from './data/Settings';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

const root = document.getElementById('app');
const [search, setSearch] = createSignal('');
const [dark, setDark] = makePersisted(createSignal(false), { name: "dark-mode" });
const [upperCaseAllWords, setUpperCaseAllWords] = makePersisted(createSignal(true), { name: "uc-words" });
const [useOldSearch, setUseOldSearch] = makePersisted(createSignal(false), { name: "old-search" });

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
			useOldSearch={useOldSearch}
			setUseOldSearch={setUseOldSearch}
		>
			{props.children}
		</App>
	);
};

const settings: Settings = {
	dark: dark,
	upperCaseAllWords: upperCaseAllWords,
	useOldSearch: useOldSearch
};

render(() => (
	<Router base={constants.BASE_URL} root={props => setApp(props)}>
		<Route path="/" component={Home} />
		<Route path="/ph" component={() => <PumpkinHill search={search} settings={settings} ng={true} />} />
		<Route path="/php" component={() => <PumpkinHill search={search} settings={settings} ng={false} />} />
		<Route path="/dc" component={() => <DeathChamber search={search} settings={settings} />} />
		<Route path="/mh" component={() => <MeteorHerd search={search} settings={settings} />} />
		<Route path="*404" component={NotFound} />
	</Router>
), root!);
