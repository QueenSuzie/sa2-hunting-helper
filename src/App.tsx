import { Container, Form, FormControl, Nav, Navbar } from 'solid-bootstrap';

import logo from './assets/emerald.webp';
import { Accessor, Component, Setter } from 'solid-js';

const App: Component<{children?: any, search: Accessor<string>, setSearch: Setter<string>, dark: Accessor<boolean>, setDark: Setter<boolean>}> = (props) => {
	return (
		<>
			<Navbar bg={props.dark() ? "black" : "secondary-subtle"} variant={props.dark() ? "dark" : "light"} expand="lg">
				<Container>
					<Navbar.Brand href="/">
						<img alt="" src={logo} width="30" height="30" class="align-top" />
						{" Hunting Helper"}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav defaultActiveKey="home" class="me-auto">
							<Nav.Link href="/" eventKey="home">Home</Nav.Link>
							<Nav.Link href="/ph" eventKey="ph">Pumpkin Hill</Nav.Link>
							<Nav.Link href="/php" eventKey="php">Pumpkin Hill NG+</Nav.Link>
							<Nav.Link href="/dc" eventKey="dc">Death Chamber</Nav.Link>
							<Nav.Link href="/mh" eventKey="mh">Meteor Herd</Nav.Link>
						</Nav>
						<Form class="d-flex">
							<FormControl
								value={props.search()}
								onInput={e => props.setSearch(e.target.value)}
								type="search"
								placeholder="Filter"
								class="me-2"
								aria-label="Filter"
							/>
						</Form>
						<Form class="ms-3 d-flex">
							<Form.Check
								type="switch"
								label="Dark Theme"
								checked={props.dark()}
								onChange={() => props.setDark(!props.dark())}
							/>
						</Form>
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
