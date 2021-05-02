import './Card.css'

export const Card = (props) => {
	return (
		<div style={props.style} className="card">
			<h3>{props.title}</h3>
			<span>{props.description}</span>
			<span>{props.lastUpdated}</span>
			<span>{props.attachment}</span>
    	</div>
	)
}