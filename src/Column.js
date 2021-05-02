import {Card} from './Card';
import './Column.css'

export const Column = (props) => {
	
	const list = [];
	const styles = {
		backgroundColor: props.color
	}
	props?.column?.forEach((col, i) => {
		list.push(<Card key={i} style={styles} title={col.title} description={col.description} lastUpdated={col.lastUpdated}></Card>)
	});

	return (
		<div className="column">
			<label className="label">{props.name} ({props?.column.length})</label>
			{list}
		</div>
	)
}