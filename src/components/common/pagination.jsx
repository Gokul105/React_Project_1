import React from "react";
import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";

const PaginationComponent = ({
	productCount,
	pageSize,
	onPageChange,
	currentPage,
}) => {
	let count = Math.ceil(productCount / pageSize);
	if (count === 0) return null;
	let pages = _.range(1, count + 1);
	return (
		<>
			<Pagination size='lg'>
				{pages.map(page => {
					let active = currentPage;
					return (
						<Pagination.Item
							active={page === active}
							key={page}
							onClick={() => onPageChange(page)}
						>
							{page}
						</Pagination.Item>
					);
				})}
			</Pagination>
		</>
	);
};

export default PaginationComponent;
