import {Card} from './Card';
import './Column.css'

export const Column = (props) => {
	
	const list = [];
	props?.column?.forEach((col, i) => {
		list.push(<Card key={i} title={col.title} description={col.description} lastUpdated={col.lastUpdated}></Card>)
	});

	
	console.log(props)
	const styles = {
		display: 'flex',
		'flex-direction': 'column',
		width: '200px',
		'background-color': props.color,
		'border-right': '1px solid gray'
	}

	const headerStyles = {
		'border-bottom': '1px solid gray'
	}

	return (
		<div style={styles}>
			<h1 style={headerStyles}>{props.name}</h1>
			{list}
		</div>
	)
}