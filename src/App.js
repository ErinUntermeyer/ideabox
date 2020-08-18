import React, { Component } from "react"
import Ideas from "./Ideas"
import Form from "./Form"
import "./App.css"

class App extends Component {
	constructor() {
		super()
		this.state = {
			ideas: [
				{ id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
				{ id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
				{ id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' }
			]
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
