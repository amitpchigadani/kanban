
import {Column} from './Column';
import './Kanban.css';
import {useState} from 'react'

export const Kanban = (props) => {

	const list = [];
	const [columns, setColumns] = useState([...props.columnList]);
	const [newColumn, setNewColumn] = useState('');
	const columnColors = ['gray', 'white'];

	columns.forEach((col, i) => {
		list.push(<Column color={col.color} name={col.name} key={i} column={col.cardList}></Column>)
	});

	const nameChange = (e) => {
    	setNewColumn(e.target.value);
  	}

	const addColumn = () => {
		const col = {
			color: columnColors[columns.length % 2],
			name: newColumn,
			cardList: []
		}

		setColumns([...columns, col]);
	}

	return (
		<>
			<div className="kanban">
				{list}
			</div>
			<input type="text" placeholder="Column name" onChange={ nameChange }/>
			<button onClick={addColumn}>
				Add Column
			</button>
		</>
	)
}