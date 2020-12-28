import React from "react";

const ProductForm = ({ match, history }) => {
	return (
		<>
			<h2>{match.params.id}</h2>
			<h2>{match.params.title}</h2>
			<button
				className='btn btn-danger'
				onClick={() => history.push("/products")}
			>
				SAVE
			</button>
		</>
	);
};

export default ProductForm;
