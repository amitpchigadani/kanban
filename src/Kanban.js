import { Column } from './Column';
import './Kanban.css';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import AddCardModal from './AddCardModal';
import AddColumnModal from './AddColumnModal';

export const Kanban = (props) => {

	const [colList, setColList] = useState([]);

	const columnColors = ['gray', 'white'];
	const [columns, setColumns] = useState([...props.columnList]);

	const [cardShow, setCardShow] = useState(false);
	const handleCardShow = () => setCardShow(true);
	const handleCardClose = () => setCardShow(false);

	const [colShow, setColShow] = useState(false);
	const handleColShow = () => setColShow(true);
	const handleColClose = () => setColShow(false);

	const updateColList = () => {
		const list = []
		columns.forEach((col, i) => {
			list.push(<Column color={col.color} name={col.name} key={i} column={col.cardList}></Column>);
		});
		setColList(list);
	};

	useEffect(updateColList, [columns]);

	const addColumn = (newColumn) => {
		const col = {
			color: columnColors[columns.length % 2],
			name: newColumn,
			cardList: []
		}
		setColumns([...columns, col]);
		handleColClose();
	}

	const addCard = (card) => {
		console.log(card)
		const selectedColIndex = columns.findIndex(col => col.name === card.columnName);
		if (selectedColIndex > -1) {
			const columnList = [...columns];
			columnList[selectedColIndex].cardList.push(card);
			setColumns([...columnList]);
		}
		handleCardClose();
	}

	return (
		<>
			<div className="toolbar">
				<Button variant="primary" onClick={handleColShow}>
					New Column
				</Button>
				<Button variant="primary" onClick={handleCardShow}>
					New Task
				</Button>
			</div>
			<AddCardModal cardShow={cardShow} handleCardClose={handleCardClose} addCard={addCard} columns={columns}/>
			<AddColumnModal colShow={colShow} handleColClose={handleColClose} addColumn={addColumn}/>
			<div className="kanban">
				{colList}
			</div>
		</>
	)
}