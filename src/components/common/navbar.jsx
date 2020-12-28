import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../../App.css";
const NavbarComponent = () => {
	return (
		<>
			<Navbar bg='light' variant='light'>
				<Nav className='mr-auto'>
					<NavLink className='nav-link' to='/'>
						Go-Cart
					</NavLink>
					<NavLink className='nav-link' to='/products'>
						Products
					</NavLink>
					<NavLink className='nav-link' to='/customers'>
						Customers
					</NavLink>
					<NavLink className='nav-link' to='/rentals'>
						Rentals
					</NavLink>
				</Nav>
			</Navbar>
		</>
	);
};

export default NavbarComponent;
