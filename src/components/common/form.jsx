import { Component } from "react";
import Joi from "joi-browser";
import Button from "react-bootstrap/Button";
import Input from "./input";

class FormComponent extends Component {
	state = {
		data: {},
		errors: {},
	};

	validate = () => {
		const result = Joi.validate(this.state.data, this.schema, {
			abortEarly: false,
		});
		if (!result.error) return null;
		const errors = {};
		for (let item of result.error.details) errors[item.path[0]] = item.message;
		return errors;
	};
	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.fieldSchema[name] };
		const { error } = Joi.validate(obj, schema);
		return !error ? null : error.details[0].message;
	};
	handleSubmit = e => {
		e.preventDefault();
		const errors = this.validate();
		this.setState({ errors: errors || {} });
		this.doSubmit();
	};
	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];
		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data, errors });
	};

	renderButton(label) {
		return (
			<Button disabled={this.validate()} variant='primary' type='submit'>
				{label}
			</Button>
		);
	}

	renderInput(name, label, type = "text") {
		const { data, errors } = this.state;
		return (
			<Input
				type={type}
				name={name}
				label={label}
				value={data[name]}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}
}

export default FormComponent;
