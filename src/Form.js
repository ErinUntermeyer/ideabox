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
				<button>Submit</button>
			</form>
		)
	}
}

export default Form
