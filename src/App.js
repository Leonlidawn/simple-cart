import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageWrapper from './components/PageWrapper/PageWrapper';
import TopMenu from './components/TopMenu/TopMenu';
import ProductListing from './pages/ProductListing/ProductListing';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';
import { CartContext } from './contexts';
import { addToCartSession, reduceFromCartSession, clearCartSession, getCartSession } from '@/utils/cartSession';
import './App.scss';

function App() {
	const [cart, setCart] = useState(getCartSession());
	
	const addToCart = (productId) =>{
		addToCartSession(productId);
		setCart(getCartSession);
	}
	const reduceFromCart = (productId) =>{
		reduceFromCartSession(productId);
		setCart(getCartSession);
	}
	const clearCart = () =>{
		clearCartSession();
		setCart(getCartSession);
	}
	return (
		<div className="App">
			<CartContext.Provider value = {{cart, addToCart, reduceFromCart, clearCart}}>
				<header>
					<TopMenu />
				</header>

				<Switch>
					<Route exact path="/" component={()=><Redirect to='/products'/>} />
					<Route exact path="/products" component={()=>PageWrapper('Products',<ProductListing/>)} />
					<Route exact path="/cart" component={()=>PageWrapper('Cart',<Cart/>)} />
					<Route exact path="/checkout" component={()=>PageWrapper('Checkout',<Checkout/>)} />
					<Route exact path="/order-confirmation" component={()=>PageWrapper('Order Confirmation',<OrderConfirmation/>)} />
				</Switch>
			</CartContext.Provider>
		</div>
	);
}

export default App;
