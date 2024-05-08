/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from "@solidjs/router";
import { createEffect, createSignal, on } from 'solid-js';
import constants from './data/Constants';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PumpkinHill from './pages/PumpkinHill';
import DeathChamber from './pages/DeathChamber';
import MeteorHerd from './pages/MeteorHerd';

const root = document.getElementById('root');
const [search, setSearch] = createSignal('');
const [dark, setDark] = createSignal(false);

if (import.meta.env.DEV && !(root instanceof HTMLElement) || root == null) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
	);
}

if (root != null && root.parentElement != null) {
	root.parentElement.classList.add("text-bg-dark");
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

render(() => (
	<Router base={constants.BASE_URL} root={props => <App search={search} setSearch={setSearch} dark={dark} setDark={setDark}>{props.children}</App>}>
		<Route path="/" component={Home} />
		<Route path="/ph" component={() => <PumpkinHill search={search} ng={true} dark={dark} />} />
		<Route path="/php" component={() => <PumpkinHill search={search} ng={false} dark={dark} />} />
		<Route path="/dc" component={() => <DeathChamber search={search} dark={dark} />} />
		<Route path="/mh" component={() => <MeteorHerd search={search} dark={dark} />} />
		<Route path="*404" component={NotFound} />
	</Router>
), root!);
