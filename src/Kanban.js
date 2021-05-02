
import {Column} from './Column';
import './Kanban.css';

export const Kanban = (props) => {

	const list = [];
	props.columnList?.forEach((col, i) => {
		list.push(<Column color={col.color} name={col.name} key={i} column={col.cardList}></Column>)
	});

	return (
		<div className="kanban">
			{list}
		</div>
	)
}