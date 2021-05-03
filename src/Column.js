import {Card} from './Card';
import './Column.css'

export const Column = (props) => {
	
	const list = [];
	const styles = {
		backgroundColor: props.color
	}
	props?.column?.forEach((col, i) => {
		list.push(<Card key={i} style={styles} card={col}></Card>)
	});

	return (
		<div className="column">
			<label className="label">{props.name} ({props?.column.length})</label>
			{list}
		</div>
	)
}