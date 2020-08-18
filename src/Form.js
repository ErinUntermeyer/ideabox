import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
	constructor() {
		super()
		this.state = {
			title: "",
			description: ""
		}
	}

	updateForm = (event) => {
		const inputName = event.target.name
		const inputValue = event.target.value
		this.setState({ [inputName]: inputValue })
	}

	submitNewIdea = (event) => {
		event.preventDefault()
		//create the new idea
		const newIdea = {
			id: Date.now(),
			title: this.state.title,
			description: this.state.description
		}
		//get data to the app
		//need to use this.props because it's being passed in from App in the render method
		this.props.addNewIdea(newIdea)
		//clear the inputs
		this.clearInputs()
	}

	clearInputs = () => {
		this.setState({ title: "", description: "" });
	}
	
	render() {
		return (
			<form>
				<input
					type="text"
					placeholder="Title"
					name="title"
					value={this.state.title}
					onChange={this.updateForm}
				/>
				<input
					type="text"
					placeholder="Description"
					name="description"
					value={this.state.description}
					onChange={this.updateForm}
				/>
				<button
					onClick={this.submitNewIdea}
				>
					Submit
				</button>
			</form>
		)
	}
}

export default Form
