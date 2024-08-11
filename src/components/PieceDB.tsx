import { createSignal, For, Show, type Accessor, type Component } from 'solid-js';
import { Button, Card, Col, Form, Modal, Row } from 'solid-bootstrap';
import { produce, reconcile, unwrap, SetStoreFunction } from 'solid-js/store';
import Settings from '../data/Settings';
import Encryption from '../data/Encryption';

const PieceDB: Component<{stage: string, search: Accessor<string>, settings: Settings, pieceDB: any, setPieceDB: SetStoreFunction<any>}> = (props) => {
	const [bfSearch, setBFSearch] = createSignal("");
	const [ceSearch, setCESearch] = createSignal("");
	const [showModal, setShowModal] = createSignal(false);
	const [showRestoreModal, setShowRestoreModal] = createSignal(false);
	const [showErrorModal, setShowErrorModal] = createSignal(false);
	const [bfTime, setBFTime] = createSignal("");
	const [ceTime, setCETime] = createSignal("");
	const [firstPiece, setFirstPiece] = createSignal("");
	const [secondPiece, setSecondPiece] = createSignal("");
	const [thirdPiece, setThirdPiece] = createSignal("");

	const handleOpenModal = () => setShowModal(true);
	const handleCloseModal = () => {
		setShowModal(false);
		setBFTime("");
		setCETime("");
		setFirstPiece("");
		setSecondPiece("");
		setThirdPiece("");
	};

	const handleAddSet = () => {
		const bfData: string = bfTime();
		const ceData: any = {
			time: ceTime(),
			p1: firstPiece(),
			p2: secondPiece(),
			p3: thirdPiece()
		};

		if (!props.pieceDB[props.stage].hasOwnProperty(bfData)) {
			props.setPieceDB(props.stage, bfData, {
				bigFoot: bfData,
				ceTimes: [ceData]
			});
		} else {
			const index: number = getInsertIndex(bfData, ceData.time);
			props.setPieceDB(props.stage, bfData, "ceTimes", produce((ceTimes: any[]) => ceTimes.splice(index, 0, ceData)));
		}

		handleCloseModal();
	};

	const getInsertIndex = (bfTime: string, ceTime: string) => {
		const data: any = unwrap(props.pieceDB);
		let low: number = 0;
		let high: number = data[props.stage][bfTime].ceTimes.length;

		while (low < high) {
			const mid: number = (low + high) >>> 1;
			if (data[props.stage][bfTime].ceTimes[mid].time < ceTime) {
				low = mid + 1;
			} else {
				high = mid;
			}
		}

		return low;
	};

	const backupDB = async () => {
		const data: Blob = new Blob([await Encryption.encrypt(props.pieceDB)], { type: "application/octet-stream" });
		const a: HTMLAnchorElement = document.createElement("a");
		a.href = URL.createObjectURL(data);
		a.download = "piecedb.sa2hh";
		a.click();

		URL.revokeObjectURL(a.href);
	};

	let restoreDBElementForm: HTMLFormElement | undefined;
	const restoreDB = (event: any) => {
		if (restoreDBElementForm == null || !event.target || !event.target.files || event.target.files.length <= 0) {
			return;
		}

		const reader: FileReader = new FileReader();
		reader.onload = async () => {
			restoreDBElementForm.reset();
			const raw_data: Uint8Array = new Uint8Array(reader.result as ArrayBuffer);

			try {
				const data: any = await Encryption.decrypt(raw_data);
				props.setPieceDB(reconcile(data));
				setShowRestoreModal(true);
			} catch (err) {
				setShowErrorModal(true);
			}
		};

		reader.readAsArrayBuffer(event.target.files[0]);
	};

	const includeBF = (search: string, bfTime: string) => {
		search = search.trim().toLowerCase();
		if (search == "") {
			return true;
		}

		return bfTime.trim().toLocaleLowerCase().startsWith(search);
	}

	const includeCE = (search: string, ceTime: string) => {
		search = search.trim().toLowerCase();
		if (search == "") {
			return true;
		}

		return ceTime.trim().toLocaleLowerCase().startsWith(search);
	}

	return (
		<div class={`${props.stage}-sets`}>
			<Row class="row-cols-auto gy-4 d-flex justify-content-center mb-4">
				<Col sm="3">
					<Form onSubmit={(e) => e.preventDefault()}>
						<Form.Group as={Row} class="gx-2">
							<Form.Label column sm="3" class="text-end">BigFoot Time:</Form.Label>
							<Col sm="8">
								<Form.Control
									value={bfSearch()}
									onInput={e => setBFSearch(e.target.value)}
									type="search"
									placeholder=""
									class="me-2"
									aria-label="Filter"
								/>
							</Col>
						</Form.Group>
					</Form>
				</Col>
				<Col sm="3">
					<Form onSubmit={(e) => e.preventDefault()}>
						<Form.Group as={Row} class="gx-2">
							<Form.Label column sm="3" class="text-end">CE Time:</Form.Label>
							<Col sm="8">
								<Form.Control
									value={ceSearch()}
									onInput={e => setCESearch(e.target.value)}
									type="search"
									placeholder=""
									class="me-2"
									aria-label="Filter"
								/>
							</Col>
						</Form.Group>
					</Form>
				</Col>
			</Row>
			<Row class="row-cols-auto gy-4 d-flex justify-content-center mb-4">
				<For each={props.pieceDB.hasOwnProperty(props.stage) ? Array.from(Object.keys(props.pieceDB[props.stage])) : []}>
					{(bfTime: string) => {
						const piece: any = props.pieceDB[props.stage][bfTime];

						return (
							<Show when={includeBF(bfSearch(), piece.bigFoot)}>
								<Col sm="5">
									<Card border={props.settings.dark() ? 'black' : undefined} class={props.settings.dark() ? 'bg-card' : undefined} text={props.settings.dark() ? "white" : "dark"}>
										<Card.Header as="h5" class={`${props.settings.dark() ? 'bg-black' : 'bg-light'} fw-bolder`}>{piece.bigFoot}</Card.Header>
										<Card.Body>
											<For each={piece.ceTimes}>
												{(sets: any) => {
													return (
														<Show when={includeCE(ceSearch(), sets.time)}>
															<Row class="piece-sets fw-semibold">
																<Col>
																	{ sets.time }
																</Col>
																<Col>
																	{ sets.p1 }
																</Col>
																<Col>
																	{ sets.p2 }
																</Col>
																<Col>
																	{ sets.p3 }
																</Col>
															</Row>
														</Show>
													);
												}}
											</For>
										</Card.Body>
									</Card>
								</Col>
							</Show>
						);
					}}
				</For>
			</Row>
			<Row class="row-cols-auto gy-4 d-flex justify-content-center">
				<Col><Button variant="primary" onClick={handleOpenModal}>Add Set</Button></Col>
				<Col><Button variant="primary" onClick={backupDB}>Backup DB</Button></Col>
				<Col>
					<Form ref={restoreDBElementForm} onSubmit={(e) => e.preventDefault()}>
						<Form.Group controlId="formFile" class="mb-3 gx-2" as={Row}>
							<Form.Label column sm="4" class="text-end">Restore DB:</Form.Label>
							<Col sm="8"><Form.Control type="file" accept=".sa2hh" onChange={restoreDB} /></Col>
						</Form.Group>
					</Form>
				</Col>
			</Row>
			<Modal show={showModal()} onHide={handleCloseModal} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Add A Set</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={(e) => { e.preventDefault(); handleAddSet(); }}>
						<Form.Group class="mb-3">
							<Form.Label>Big Foot Time</Form.Label>
							<Form.Control type="text" value={bfTime()} onInput={e => setBFTime(e.target.value)} />
						</Form.Group>
						<Form.Group class="mb-3">
							<Form.Label>CE Time</Form.Label>
							<Form.Control type="text" value={ceTime()} onInput={e => setCETime(e.target.value)} />
						</Form.Group>
						<Form.Group class="mb-3">
							<Form.Label>First Piece</Form.Label>
							<Form.Control type="text" value={firstPiece()} onInput={e => setFirstPiece(e.target.value)} />
						</Form.Group>
						<Form.Group class="mb-3">
							<Form.Label>Second Piece</Form.Label>
							<Form.Control type="text" value={secondPiece()} onInput={e => setSecondPiece(e.target.value)} />
						</Form.Group>
						<Form.Group class="mb-3">
							<Form.Label>Third Piece</Form.Label>
							<Form.Control type="text" value={thirdPiece()} onInput={e => setThirdPiece(e.target.value)} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>Close</Button>
					<Button variant="primary" onClick={handleAddSet}>Save Changes</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={showRestoreModal()} onHide={() => setShowRestoreModal(false)}>
				<Modal.Body>
					The set database was successfully restored!
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={() => setShowRestoreModal(false)}>OK</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={showErrorModal()} onHide={() => setShowErrorModal(false)}>
				<Modal.Body>
					Invalid DB File!
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={() => setShowErrorModal(false)}>OK</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default PieceDB;
