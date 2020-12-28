import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ListItems = ({ items, selectedItem, onItemSelect }) => {
	return (
		<ListGroup as='ul' style={{ cursor: "pointer" }}>
			{items.map((item, index) => {
				let active = selectedItem;
				return (
					<ListGroup.Item
						as='li'
						active={item === active}
						key={index}
						onClick={() => onItemSelect(item)}
					>
						{item}
					</ListGroup.Item>
				);
			})}
		</ListGroup>
	);
};

export default ListItems;
