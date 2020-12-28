import React, { Component } from "react";
import axios from "axios";
import CartTable from "./cartTable";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Container, Col } from "react-bootstrap";
import PaginationComponent from "./common/pagination";
import { paginate } from "../components/utils/paginate";
import ListItems from "./common/listItems";
import _ from "lodash";

class Products extends Component {
	constructor() {
		super();
		this.state = {
			productDetails: [],
			categoryDetails: [],
			errorMessage: "",
			isProductFetched: false,
			pageSize: 4,
			currentPage: 1,
			selectedItem: "All Categories",
			sortColumn: { path: "title", order: "asc" },
		};
	}

	getProductDetails = () => {
		axios
			.get(`https://fakestoreapi.com/products`)
			.then(res => {
				this.setState({ productDetails: res.data, isProductFetched: true });
				this.setState({
					categoryDetails: [
						"All Categories",
						"electronics",
						"jewelery",
						"women clothing",
						"men clothing",
					],
				});
				console.log(this.state.productDetails);
			})
			.catch(err => {
				this.setState({ errorMessage: "Cart is Empty" }, () =>
					console.log(this.state.errorMessage)
				);
			});
	};

	componentDidMount() {
		this.getProductDetails();
	}

	deleteProduct = p => {
		const productDetails = this.state.productDetails.filter(
			pr => pr.id !== p.id
		);
		this.setState({ productDetails });
	};
	handlePageChange = page => {
		this.setState({ currentPage: page });
	};
	handleItemSelect = item => {
		this.setState({ selectedItem: item, currentPage: 1 });
	};
	handleSort = sortColumn => {
		this.setState({ sortColumn });
	};
	getPagedData = () => {
		const {
			productDetails: allProducts,
			pageSize,
			currentPage,
			selectedItem,
			sortColumn,
		} = this.state;
		const filtered =
			selectedItem === "All Categories"
				? allProducts
				: allProducts.filter(p => p.category === selectedItem);

		const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
		const productDetails = paginate(sorted, currentPage, pageSize);

		return { totalCount: filtered.length, productDetails };
	};
	renderProductDetails() {
		const {
			pageSize,
			currentPage,
			categoryDetails,
			selectedItem,
			sortColumn,
		} = this.state;
		const { totalCount, productDetails } = this.getPagedData();
		return (
			<>
				<h3 className='text-success text-center'>
					Total Products in cart : {totalCount}
				</h3>
				<Container>
					<Row>
						<Col md={3}>
							<ListItems
								items={categoryDetails}
								selectedItem={selectedItem}
								onItemSelect={this.handleItemSelect}
							/>
						</Col>
						<Col>
							<CartTable
								productDetails={productDetails}
								onDelete={this.deleteProduct}
								onSort={this.handleSort}
								sortColumn={sortColumn}
							/>
							<PaginationComponent
								productCount={totalCount}
								pageSize={pageSize}
								onPageChange={this.handlePageChange}
								currentPage={currentPage}
							/>
						</Col>
					</Row>
				</Container>
			</>
		);
	}

	render() {
		const { isProductFetched, errorMessage } = this.state;
		const { length: count } = this.state.productDetails;
		return (
			<>
				{isProductFetched && count !== 0 ? (
					<>{this.renderProductDetails()}</>
				) : (
					<>
						{count === 0 && isProductFetched ? (
							<h1 className='text-danger text-center mt-5'>
								Your cart is empty :(
							</h1>
						) : (
							<>
								{!errorMessage ? (
									<h1 className='text-center mt-5'>Loading...</h1>
								) : (
									<h1 className='text-center mt-5'>{errorMessage}</h1>
								)}
							</>
						)}
					</>
				)}
			</>
		);
	}
}

export default Products;
