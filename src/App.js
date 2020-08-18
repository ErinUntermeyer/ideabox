import React, { Component } from "react"
import Ideas from "./Ideas"
import Form from "./Form"
import "./App.css"

class App extends Component {
	constructor() {
		super()
		this.state = {
			ideas: []
		}
	}

	addNewIdea = (newIdea) => {
		// add the new idea into existing ideas array in state
		const ideas = this.state.ideas
		ideas.push(newIdea)
		// set state with the new ideas array (will trigger a re-render)
		this.setState({ ideas: ideas})
	}

	render() {
		return (
			<main className="App">
				<h1>Idea Box</h1>
				<Form addNewIdea={this.addNewIdea} />
				<Ideas ideas={this.state.ideas} />
			</main>
		)
	}
}

export default App
