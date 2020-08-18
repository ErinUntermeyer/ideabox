import React from "react"
import "./Card.css"

const Card = (props) => {
	return (
		<div className="Card">
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<button>🗑</button>
		</div>
	)
}

export default Card