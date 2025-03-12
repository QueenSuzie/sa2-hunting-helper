import { Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'solid-bootstrap';
import { Accessor, Component, For, Setter, Show } from 'solid-js';
import { Location, useLocation } from '@solidjs/router';
import { codes as codes_ph } from './data/stages/hero/PumpkinHillNG';
import { codes as codes_php } from './data/stages/hero/PumpkinHill';
import { codes as codes_am } from './data/stages/hero/AquaticMine';
import { codes as codes_dc } from './data/stages/hero/DeathChamber';
import { codes as codes_mh } from './data/stages/hero/MeteorHerd';
import { codes as codes_eq } from './data/stages/dark/EggQuartersNG';
import { codes as codes_eqp } from './data/stages/dark/EggQuarters';
import { codes as codes_dl } from './data/stages/dark/DryLagoon';
import { codes as codes_sh } from './data/stages/dark/SecurityHall';
import { codes as codes_ms } from './data/stages/dark/MadSpace';
import { Story } from './data/Settings';
import logo from './assets/emerald.webp';
import constants from './data/Constants';
import Code from './data/Code';

const App: Component<{
	children?: any,
	search: Accessor<string>,
	setSearch: Setter<string>,
	dark: Accessor<boolean>,
	setDark: Setter<boolean>,
	upperCaseAllWords: Accessor<boolean>,
	setUpperCaseAllWords: Setter<boolean>,
	splitBigSets: Accessor<boolean>,
	setSplitBigSets: Setter<boolean>,
	disableConfirms: Accessor<boolean>,
	setDisableConfirms: Setter<boolean>,
	story: Accessor<Story>,
	setStory: Setter<Story>
}> = (props) => {
	const locationIs = (page: string) => {
		const location: Location<unknown> = useLocation();
		const locations: string[] = location.pathname.split("/");
		if (locations.length <= 2) {
			return page === "";
		}

		return locations[2] === page;
	};

	const codesDropdown = (codes: Code[]) => {
		return (
			<NavDropdown.Item as={Row} class="row-cols-1 d-flex">
				<For each={codes}>
					{(code: Code) => {
						return (
							<Col>
								<Row class="gy-2 gx-0">
									<Col sm={2} class="fw-bold">{ code.code }</Col>
									<Col sm={10}>{ code.piece }</Col>
								</Row>
							</Col>
						);
					}}
				</For>
			</NavDropdown.Item>
		);
	};

	return (
		<>
			<Navbar bg={props.dark() ? "black" : "secondary-subtle"} variant={props.dark() ? "dark" : "light"} expand="lg">
				<Container>
					<Navbar.Brand href={constants.BASE_URL}>
						<img alt="" src={logo} width="30" height="30" class="align-top" />
						{" Hunting Helper"}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav class="me-auto">
							<Nav.Link href={constants.BASE_URL} active={locationIs("home") || locationIs("")}>Home</Nav.Link>
							<Nav.Item classList={{ "nav-link": true }} style={{ cursor: "pointer" }} onClick={() => props.setStory(props.story() === Story.HERO ? Story.DARK : Story.HERO)}>
								{props.story() === Story.HERO ? "Dark" : "Hero"} Story
							</Nav.Item>
							<Show when={props.story() === Story.HERO}>
								<NavDropdown title="Pumpkin Hill" menuVariant={props.dark() ? "dark" : "light"} active={locationIs("ph") || locationIs("php")} autoClose="inside">
									<NavDropdown.Item href={`${constants.BASE_URL}/ph`} active={locationIs("ph")}>NG</NavDropdown.Item>
									<NavDropdown.Item href={`${constants.BASE_URL}/php`} active={locationIs("php")}>NG+</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href={`${constants.BASE_URL}/am`} active={locationIs("am")}>Aquatic Mine</Nav.Link>
								<Nav.Link href={`${constants.BASE_URL}/dc`} active={locationIs("dc")}>Death Chamber</Nav.Link>
								<Nav.Link href={`${constants.BASE_URL}/mh`} active={locationIs("mh")}>Meteor Herd</Nav.Link>
							</Show>
							<Show when={props.story() === Story.DARK}>
								<Nav.Link href={`${constants.BASE_URL}/dl`} active={locationIs("dl")}>Dry Lagoon</Nav.Link>
								<NavDropdown title="Egg Quarters" menuVariant={props.dark() ? "dark" : "light"} active={locationIs("eq") || locationIs("eqp")} autoClose="inside">
									<NavDropdown.Item href={`${constants.BASE_URL}/eq`} active={locationIs("eq")}>NG</NavDropdown.Item>
									<NavDropdown.Item href={`${constants.BASE_URL}/eqp`} active={locationIs("eqp")}>NG+</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href={`${constants.BASE_URL}/sh`} active={locationIs("sh")}>Security Hall</Nav.Link>
								<Nav.Link href={`${constants.BASE_URL}/ms`} active={locationIs("ms")}>Mad Space</Nav.Link>
							</Show>
							<Show when={locationIs("ph") && codes_ph.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_ph) }
								</NavDropdown>
							</Show>
							<Show when={locationIs("php") && codes_php.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_php) }
								</NavDropdown>
							</Show>
							<Show when={locationIs("am") && codes_am.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_am) }
								</NavDropdown>
							</Show>
							<Show when={locationIs("dc") && codes_dc.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_dc) }
								</NavDropdown>
							</Show>
							<Show when={locationIs("mh") && codes_mh.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_mh) }
								</NavDropdown>
							</Show>
							<Show when={locationIs("eq") && codes_eq.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_eq) }
								</NavDropdown>
							</Show>
							<Show when={locationIs("eqp") && codes_eqp.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_eqp) }
								</NavDropdown>
							</Show>
							<Show when={locationIs("dl") && codes_dl.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_dl) }
								</NavDropdown>
							</Show>
							<Show when={locationIs("sh") && codes_sh.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_sh) }
								</NavDropdown>
							</Show>
							<Show when={locationIs("ms") && codes_ms.length > 0}>
								<NavDropdown title="Codes" class="navbar-codes" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
									{ codesDropdown(codes_ms) }
								</NavDropdown>
							</Show>
						</Nav>
						<Form class="d-flex" onSubmit={(e) => e.preventDefault()}>
							<FormControl
								value={props.search()}
								onInput={e => props.setSearch(e.target.value)}
								type="search"
								placeholder="Filter"
								class="me-2"
								aria-label="Filter"
							/>
						</Form>
						<NavDropdown title="Settings" class="ms-3 navbar-settings" menuVariant={props.dark() ? "dark" : "light"} autoClose="outside">
							<NavDropdown.Item as="div">
								<Form onSubmit={(e) => e.preventDefault()}>
									<Form.Check
										type="switch"
										label="Dark Theme"
										checked={props.dark()}
										onChange={() => props.setDark(!props.dark())}
									/>
								</Form>
							</NavDropdown.Item>
							<NavDropdown.Item as="div">
								<Form onSubmit={(e) => e.preventDefault()}>
									<Form.Check
										type="switch"
										label="Uppercase All Words"
										checked={props.upperCaseAllWords()}
										onChange={() => props.setUpperCaseAllWords(!props.upperCaseAllWords())}
									/>
								</Form>
							</NavDropdown.Item>
							<NavDropdown.Item as="div">
								<Form onSubmit={(e) => e.preventDefault()}>
									<Form.Check
										type="switch"
										label="Split Up Big Sets"
										checked={props.splitBigSets()}
										onChange={() => props.setSplitBigSets(!props.splitBigSets())}
									/>
								</Form>
							</NavDropdown.Item>
							<NavDropdown.Item as="div">
								<Form onSubmit={(e) => e.preventDefault()}>
									<Form.Check
										type="switch"
										label="Disable Confirmed Sets Section"
										checked={props.disableConfirms()}
										onChange={() => props.setDisableConfirms(!props.disableConfirms())}
									/>
								</Form>
							</NavDropdown.Item>
						</NavDropdown>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container fluid class="p-4">
				{props.children}
			</Container>
		</>
	);
};

export default App;
