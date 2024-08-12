import { createSignal, For, Show, type Accessor, type Component } from 'solid-js';
import { Button, Card, Col, Form, Modal, Row } from 'solid-bootstrap';
import { produce, reconcile, unwrap, SetStoreFunction } from 'solid-js/store';
import Settings from '../data/Settings';
import Encryption from '../data/Encryption';
import Edit from './icons/Edit';
import Delete from './icons/Delete';

const PieceDB: Component<{stage: string, search: Accessor<string>, settings: Settings, pieceDB: any, setPieceDB: SetStoreFunction<any>}> = (props) => {
	const [bfSearch, setBFSearch] = createSignal("");
	const [ceSearch, setCESearch] = createSignal("");
	const [showModal, setShowModal] = createSignal(false);
	const [showRestoreModal, setShowRestoreModal] = createSignal(false);
	const [showErrorModal, setShowErrorModal] = createSignal(false);
	const [showEditModal, setShowEditModal] = createSignal({ editBFTime: "", editCETime: "" });
	const [showDeleteModal, setShowDeleteModal] = createSignal({ deleteBFTime: "", deleteCETime: "" });
	const [showDeleteCatModal, setShowDeleteCatModal] = createSignal("");
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

	const getSetIndex = (sets: any[], time: string) => {
		for (let i = 0; i < sets.length; i++) {
			if (sets[i].time == time) {
				return i;
			}
		}

		return -1;
	};

	const handleShowEditModal = (bfTime: string, ceTime: string) => {
		const data: any = unwrap(props.pieceDB);
		if (!data[props.stage].hasOwnProperty(bfTime)) {
			return;
		}

		const ceIndex: number = getSetIndex(data[props.stage][bfTime].ceTimes, ceTime);
		if (ceIndex < 0) {
			return;
		}

		setFirstPiece(data[props.stage][bfTime].ceTimes[ceIndex].p1);
		setSecondPiece(data[props.stage][bfTime].ceTimes[ceIndex].p2);
		setThirdPiece(data[props.stage][bfTime].ceTimes[ceIndex].p3);
		setShowEditModal({ editBFTime: bfTime, editCETime: ceTime });
	};

	const handleCloseEditModal = () => {
		setFirstPiece("");
		setSecondPiece("");
		setThirdPiece("");
		setShowEditModal({ editBFTime: "", editCETime: "" });
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

	const handleEditSet = (bfTime: string, ceTime: string) => {
		if (!props.pieceDB[props.stage].hasOwnProperty(bfTime)) {
			return;
		}

		const sets: any = unwrap(props.pieceDB)[props.stage][bfTime].ceTimes;
		const ceIndex: number = getSetIndex(sets, ceTime);
		props.setPieceDB(props.stage, bfTime, "ceTimes", ceIndex, produce((set: any) => {
			set.p1 = firstPiece()
			set.p2 = secondPiece()
			set.p3 = thirdPiece()
		}));

		handleCloseEditModal();
	};

	const deleteEntry = (bfTime: string, ceTime: string) => {
		if (!props.pieceDB[props.stage].hasOwnProperty(bfTime)) {
			return;
		}

		const sets: any = unwrap(props.pieceDB)[props.stage][bfTime].ceTimes;
		props.setPieceDB(props.stage, bfTime, "ceTimes", sets.filter((set: any) => set.time != ceTime));
		setShowDeleteModal({ deleteBFTime: "", deleteCETime: "" });
	};

	const deleteCategory = (bfTime: string) => {
		if (!props.pieceDB[props.stage].hasOwnProperty(bfTime)) {
			return;
		}

		props.setPieceDB(props.stage, bfTime, undefined);
		setShowDeleteCatModal("");
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
								<Col sm="6">
									<Card border={props.settings.dark() ? 'black' : undefined} class={props.settings.dark() ? 'bg-card' : undefined} text={props.settings.dark() ? "white" : "dark"}>
										<Card.Header as="h5" class={`${props.settings.dark() ? 'bg-black' : 'bg-light'} fw-bolder`}>
											{piece.bigFoot}
											<div class="float-end">
												<Delete button={true} onClick={() => setShowDeleteCatModal(bfTime)} />
											</div>
										</Card.Header>
										<Card.Body>
											<For each={piece.ceTimes}>
												{(set: any) => {
													return (
														<Show when={includeCE(ceSearch(), set.time)}>
															<Row class="piece-sets fw-semibold">
																<Col>
																	{ set.time }
																</Col>
																<Col>
																	{ set.p1 }
																</Col>
																<Col>
																	{ set.p2 }
																</Col>
																<Col>
																	{ set.p3 }
																</Col>
																<Col sm="1">
																	<Edit button={true} onClick={() => handleShowEditModal(bfTime, set.time)} />
																	<Delete button={true} onClick={() => setShowDeleteModal({ deleteBFTime: bfTime, deleteCETime: set.time })} />
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
					<Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
					<Button variant="primary" onClick={handleAddSet}>Add Set</Button>
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
			<Modal show={showEditModal().editBFTime != "" && showEditModal().editCETime != ""} onHide={() => setShowEditModal({ editBFTime: "", editCETime: "" })}>
				<Modal.Header closeButton>
					<Modal.Title>Editing Set BF: {showEditModal().editBFTime} - CE: {showEditModal().editCETime}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={(e) => { e.preventDefault(); handleEditSet(showEditModal().editBFTime, showEditModal().editCETime); }}>
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
					<Button variant="secondary" onClick={handleCloseEditModal}>Close</Button>
					<Button variant="primary" onClick={() => handleEditSet(showEditModal().editBFTime, showEditModal().editCETime)}>Save Changes</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={showDeleteModal().deleteBFTime != "" && showDeleteModal().deleteCETime != ""} onHide={() => setShowDeleteModal({ deleteBFTime: "", deleteCETime: "" })}>
				<Modal.Body>
					<div>Are you sure you want to delete the set for</div>
					<div>BF: {showDeleteModal().deleteBFTime}</div>
					<div>CE: {showDeleteModal().deleteCETime}</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowDeleteModal({ deleteBFTime: "", deleteCETime: "" })}>Cancel</Button>
					<Button variant="danger" onClick={() => deleteEntry(showDeleteModal().deleteBFTime, showDeleteModal().deleteCETime)}>Delete</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={showDeleteCatModal() != ""} onHide={() => setShowDeleteCatModal("")}>
				<Modal.Body>
					Are you sure you want to delete this entire category ({showDeleteCatModal()}) and all its sets?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowDeleteCatModal("")}>Cancel</Button>
					<Button variant="danger" onClick={() => deleteCategory(showDeleteCatModal())}>Delete</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default PieceDB;
