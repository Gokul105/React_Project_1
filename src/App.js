import "./App.css";
import Products from "./components/products";
import NavbarComponent from "./components/common/navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductForm from "./components/productForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/common/loginForm";
function App() {
	return (
		<>
			<NavbarComponent />
			<main className='container'>
				<Switch>
					<Route path='/products/:id/:title' component={ProductForm} />
					<Route path='/products' component={Products} />
					<Route path='/customers' component={Customers} />
					<Route path='/rentals' component={Rentals} />
					<Route path='/notFound' component={NotFound} />
					<Route path='/loginForm' component={LoginForm} />
					<Redirect from='/' exact to='/products' />
					<Redirect to='/notFound' />
				</Switch>
			</main>
		</>
	);
}

export default App;
