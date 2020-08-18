import React from "react"
import "./Ideas.css"
import Card from "./Card"

const Ideas = ( {ideas} ) => {

	const ideaCards = ideas.map(idea => {
		return (
			<Card
				id={idea.id}
				title={idea.title}
				description={idea.description}
				key={idea.id}
			/>
		)
	})

	return (
		<div className="Ideas-container">{ideaCards}</div>
	)
}

export default Ideas