import './Card.css'

export const Card = (props) => {
	return (
		<div style={props.style} className="card">
			<h5>{props.card.title}</h5>
			<span>{props.card.description}</span>
			<span>{props.card.lastUpdated}</span>
			<span className="storyPoint">{props.card.storyPoint}</span>
    	</div>
	)
}