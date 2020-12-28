import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class TableHeader extends Component {
	raiseSort = path => {
		if (path !== null) {
			const sortColumn = { ...this.props.sortColumn };
			if (sortColumn.path === path) {
				sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
			} else {
				sortColumn.path = path;
				sortColumn.order = "asc";
			}
			this.props.onSort(sortColumn);
		}
	};

	renderSortIcon = column => {
		if (column.path !== this.props.sortColumn.path) return null;
		if (this.props.sortColumn.order === "asc")
			return <i className='fa fa-arrow-circle-up'></i>;
		else return <i className='fa fa-arrow-circle-down'></i>;
	};
	render() {
		return (
			<>
				<thead>
					<tr>
						{this.props.columns.map(column => {
							return (
								<th
									key={column.label || column.key}
									onClick={() => this.raiseSort(column.path)}
								>
									<div className='d-flex flex-row'>
										{column.label}
										{this.renderSortIcon(column)}
									</div>
								</th>
							);
						})}
					</tr>
				</thead>
			</>
		);
	}
}

export default TableHeader;
