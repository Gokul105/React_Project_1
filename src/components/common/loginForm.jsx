import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../App.css";
class LoginForm extends Component {
	state = {
		formValue: {
			username: "",
			password: "",
		},
		error: {},
	};

	handleChange = ({ currentTarget: input }) => {
		const formValue = { ...this.state.formValue };
		formValue[input.name] = input.value;
		this.setState({ formValue });
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log("submitted");
	};
	render() {
		const { username, password } = this.state.formValue;
		return (
			<>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>UserName</Form.Label>
						<Form.Control
							type='text'
							name='username'
							onChange={this.handleChange}
							value={username}
							placeholder='Enter email'
						/>
					</Form.Group>

					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							onChange={this.handleChange}
							value={password}
							placeholder='Password'
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</>
		);
	}
}

export default LoginForm;
