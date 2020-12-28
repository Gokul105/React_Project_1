import React from "react";
import Table from "react-bootstrap/Table";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const TableComponent = ({ data, columns, sortColumn, onSort }) => {
	return (
		<>
			<Table striped hover size='sm'>
				<TableHeader
					columns={columns}
					sortColumn={sortColumn}
					onSort={onSort}
				/>
				<TableBody data={data} columns={columns} />
			</Table>
		</>
	);
};

export default TableComponent;
