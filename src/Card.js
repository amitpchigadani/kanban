export const Card = (props) => {
	
	const styles = {
		display: 'flex',
		'flex-direction': 'column',
		'border-bottom': '1px solid gray',
    	height: '200px'
	}
	return (
		<div style={styles}>
			<h3>{props.title}</h3>
			<span>{props.description}</span>
			<span>{props.lastUpdated}</span>
			<span>{props.attachment}</span>
    	</div>
	)
}