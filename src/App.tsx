import { Container, Form, FormControl, Nav, NavDropdown, Navbar } from 'solid-bootstrap';

import logo from './assets/emerald.webp';
import { Accessor, Component, Setter } from 'solid-js';
import constants from './data/Constants';

const App: Component<{
	children?: any,
	search: Accessor<string>,
	setSearch: Setter<string>,
	dark: Accessor<boolean>,
	setDark: Setter<boolean>,
	upperCaseAllWords: Accessor<boolean>,
	setUpperCaseAllWords: Setter<boolean>
}> = (props) => {
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
						<Nav defaultActiveKey="home" class="me-auto">
							<Nav.Link href={constants.BASE_URL} eventKey="home">Home</Nav.Link>
							<Nav.Link href={`${constants.BASE_URL}/ph`} eventKey="ph">Pumpkin Hill</Nav.Link>
							<Nav.Link href={`${constants.BASE_URL}/php`} eventKey="php">Pumpkin Hill NG+</Nav.Link>
							<Nav.Link href={`${constants.BASE_URL}/dc`} eventKey="dc">Death Chamber</Nav.Link>
							<Nav.Link href={`${constants.BASE_URL}/mh`} eventKey="mh">Meteor Herd</Nav.Link>
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
