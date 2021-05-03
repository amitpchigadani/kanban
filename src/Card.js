import './Card.css'

export const Card = (props) => {
	return (
		<div style={props.style} className="card">
			<h3>{props.card.title}</h3>
			<span>{props.card.description}</span>
			<span>{props.card.lastUpdated}</span>
			<span>{props.card.attachment}</span>
			<span className="storyPoint">{props.card.storyPoint}</span>
    	</div>
	)
}