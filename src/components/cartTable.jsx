import React, { Component } from "react";
import TableComponent from "./common/table";
import "../App.css";
import { Link } from "react-router-dom";

class CartTable extends Component {
	columns = [
		{
			path: null,
			label: "PRODUCT",
			content: product => (
				<img
					src={product.image}
					alt='productImage'
					style={{ width: "100px", height: "100px" }}
				/>
			),
		},
		{
			path: "title",
			label: "TITLE",
			content: product => (
				<Link to={`/products/${product.id}/${product.title}`}>
					{product.title}
				</Link>
			),
		},
		{ path: "category", label: "CATEGORY" },
		{ path: "price", label: "PRICE" },
		{
			path: null,
			key: "delete",
			content: product => (
				<button
					className='btn btn-danger'
					onClick={() => this.props.onDelete(product)}
				>
					Delete
				</button>
			),
		},
	];

	render() {
		const { productDetails, sortColumn, onSort } = this.props;
		return (
			<>
				<TableComponent
					data={productDetails}
					columns={this.columns}
					sortColumn={sortColumn}
					onSort={onSort}
				/>
			</>
		);
	}
}

export default CartTable;
