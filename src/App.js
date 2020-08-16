import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { products } from '@/data/products.json';

import PageWrapper from './components/PageWrapper/PageWrapper';
import TopMenu from './components/TopMenu/TopMenu';
import ToastMaker from './components/ToastMaker/ToastMaker';
import AddedToCartNotification from './components/AddedToCartNotification/AddedToCartNotification';

import ProductListing from './pages/ProductListing/ProductListing';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';

import { addToCartSession, reduceFromCartSession, clearCartSession, getCartSession } from '@/utils/cartSession';
import { CartContext } from './contexts';

import './App.scss';

function App() {
	const [cart, setCart] = useState(getCartSession());
	//orderId is lefted to the top to prevent losing it from rerendering caused by cart update.
	const [orderId, setOrderId] = useState();

	const addToCart = (productId) => {
		addToCartSession(productId);
		setCart(getCartSession);
		ToastMaker.makeToast((props) => <AddedToCartNotification {...props} product={productTable[productId]} />)
	}
	const reduceFromCart = (productId) => {
		reduceFromCartSession(productId);
		setCart(getCartSession);
	}
	const clearCart = () => {
		clearCartSession();
		setCart(getCartSession);
	}

	const getTotalPrice = () => Object.entries(cart).reduce(
		(sum, [pid, n]) => {
			const { price } = productTable[pid];
			return sum += n * price;
		}, 0
	);

	const productTable = products.reduce(
		(table, p) => {
			table[p.id] = p;
			return table;
		}, {}
	);

	return (
		<div className="App">
			<CartContext.Provider value={{ cart, addToCart, reduceFromCart, clearCart, getTotalPrice, orderId, setOrderId, products, productTable }}>
				<header>
					<TopMenu />
				</header>
				<Switch>
					<Route exact path="/" component={() => <Redirect to='/products' />} />
					<Route exact path="/products" component={() => PageWrapper('Products', <ProductListing />)} />
					<Route exact path="/cart" component={() => PageWrapper('Cart', <Cart />)} />
					<Route exact path="/checkout" component={() => PageWrapper('Checkout', <Checkout />)} />
					<Route exact path="/order-confirmation" component={() => PageWrapper('Order Confirmation', <OrderConfirmation />)} />
				</Switch>
			</CartContext.Provider>
		</div>
	);
}

export default App;