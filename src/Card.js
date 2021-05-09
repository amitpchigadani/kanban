import './Card.css'
import * as Icon from 'react-feather';

export const Card = (props) => {

	const showAttachments = () => {
		if (props.card.attachment) {
			return (
				<div class="attachment">
					<Icon.Paperclip size={18}/>
					<span title={props.card.attachment} class="attachment-name">{props.card.attachment}</span>
				</div>
			)
		}

	}

	return (
		<div style={props.style} className="card">
			<h5>{props.card.title}</h5>
			<span>{props.card.description}</span>
			<span>{props.card.lastUpdated}</span>
			{showAttachments()}
			<span className="storyPoint">{props.card.storyPoint}</span>
		</div>
	)
}