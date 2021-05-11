import React from "react";
import Form from "react-bootstrap/Form";

const Input = ({ name, label, value, error, ...rest }) => {
	return (
		<>
			<Form.Group>
				<Form.Label>{label}</Form.Label>
				<Form.Control {...rest} name={name} value={value} />
				{error && <div className='alert alert-danger'>{error}</div>}
			</Form.Group>
		</>
	);
};

export default Input;
