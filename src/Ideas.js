import React from "react"
import "./Ideas.css"
import Card from "./Card"

const Ideas = (props) => {

	const ideaCards = props.ideas.map(idea => {
		return (
			<Card
				id={idea.id}
				title={idea.title}
				description={idea.description}
				key={props.ideas.indexOf(idea)}
			/>
		)
	})

	return (
		<div className="Ideas-container">{ideaCards}</div>
	)
}

export default Ideas