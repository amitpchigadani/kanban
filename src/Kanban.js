import { Column } from './Column';
import './Kanban.css';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export const Kanban = (props) => {

	const list = [];
	const colDropDownItems = [];

	let newColumn = '';
	let newCard = {
		title: '',
		description: '',
		storyPoint: ''
	};
	const columnColors = ['gray', 'white'];

	const [columns, setColumns] = useState([...props.columnList]);
	const [show, setShow] = useState(false);
	const [cardShow, setCardShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleCardClose = () => setCardShow(false);
	const handleCardShow = () => setCardShow(true);

	columns.forEach((col, i) => {
		list.push(<Column color={col.color} name={col.name} key={i} column={col.cardList}></Column>);
		colDropDownItems.push(<Dropdown.Item key={i} eventKey={col.name}>{col.name}</Dropdown.Item>);
	});

	const nameChange = (e) => {
		newColumn = e.target.value;
	}

	const addColumn = () => {
		const col = {
			color: columnColors[columns.length % 2],
			name: newColumn,
			cardList: []
		}

		setColumns([...columns, col]);
		setShow(false);
	}

	const cardTitleChange = (e) => {
		newCard.title = e.target.value;
	}

	const cardDescriptionChange = (e) => {
		newCard.description = e.target.value;
	}

	const cardStoryPointChange = (e) => {
		newCard.storyPoint = e.target.value;
	}

	const addCard = () => {
		const d = new Date();
		newCard.lastUpdated = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
		const selectedColIndex = columns.findIndex(col => col.name === newCard.columnName);
		if (selectedColIndex > -1) {
			const columnList = [...columns];
			columnList[selectedColIndex].cardList.push(newCard);
			setColumns([...columnList]);
		}
		setCardShow(false);
	}

	const columnSelectionChange = (columnName) => {
		newCard.columnName = columnName;
	}

	return (
		<>
			<div className="toolbar">
				<Button variant="primary" onClick={handleShow}>
					Create Column
				</Button>
				<Button variant="primary" onClick={handleCardShow}>
					New Task
				</Button>
			</div>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Create Column</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="text" placeholder="Column name" onChange={nameChange} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
		          </Button>
					<Button variant="primary" onClick={addColumn}>
						Add
		          </Button>
				</Modal.Footer>
			</Modal>
			<Modal
				show={cardShow}
				onHide={handleCardClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>New Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="modal-form">
						<input type="text" placeholder="Title" onChange={cardTitleChange} />
						<textarea type="text" placeholder="Description" onChange={cardDescriptionChange} />
						<input type="text" placeholder="Story Points" onChange={cardStoryPointChange} />
						<DropdownButton id="dropdown-basic-button" title="Select Column" onSelect={columnSelectionChange}>
							{colDropDownItems}
						</DropdownButton>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCardClose}>
						Close
		          </Button>
					<Button variant="primary" onClick={addCard}>
						Add
		          </Button>
				</Modal.Footer>
			</Modal>
			<div className="kanban">
				{list}
			</div>
		</>
	)
}