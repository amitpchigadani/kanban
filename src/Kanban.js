
import {Column} from './Column';

export const Kanban = (props) => {

	const list = [];
	console.log(props)
	props.columnList?.forEach((col, i) => {
		list.push(<Column color={col.color} name={col.name} key={i} column={col.cardList}></Column>)
	});

	const styles = {
		display: 'flex',
		'flex-direction': 'row'
	}

	return (
		<div style={styles}>
			{list}
		</div>
	)
}