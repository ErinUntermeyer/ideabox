import React, { Component } from "react"
import Ideas from "./Ideas"
import "./App.css"

class App extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<main className="App">
				<h1>Idea Box</h1>
				<Ideas />
			</main>
		)
	}
}

export default App
