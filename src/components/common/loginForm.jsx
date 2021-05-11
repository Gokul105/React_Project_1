import React from "react";
import Form from "react-bootstrap/Form";
import Joi from "joi-browser";
import "../../App.css";
import FormComponent from "./form";

class LoginForm extends FormComponent {
	state = {
		data: {
			username: "",
			password: "",
		},
		errors: {},
	};

	schema = {
		username: Joi.string().required(),
		password: Joi.string().required(),
	};

	fieldSchema = {
		username: Joi.string()
			.required()
			.email({ minDomainAtoms: 2 })
			.label("Username"),
		password: Joi.string().required().min(5).label("Password"),
	};

	doSubmit = () => {
		console.log("submitted");
	};
	render() {
		return (
			<>
				<Form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("submit")}
				</Form>
			</>
		);
	}
}

export default LoginForm;
