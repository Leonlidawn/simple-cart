import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageWrapper from './components/PageWrapper/PageWrapper';
import TopMenu from './components/TopMenu/TopMenu';
import ProductListing from './pages/ProductListing/ProductListing';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import AddedToCartNotification from './components/AddedToCartNotification/AddedToCartNotification';
import { CartContext } from './contexts';
import { addToCartSession, reduceFromCartSession, clearCartSession, getCartSession } from '@/utils/cartSession';
import { products } from '@/data/products.json';
import './App.scss';
import ToastMaker from './components/ToastMaker/ToastMaker';

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

	const getTotalPrice = ()=> Object.entries(cart).reduce(
		(sum,[pid,n])=>{
			const {price} = productTable[pid];
			return sum += n * price;
		},0
	);

	const productTable = products.reduce(
		(table,p)=>{
			table[p.id] = p;
			return table;
		},{}
	);

	ToastMaker.makeToast((props)=><AddedToCartNotification {...props} product={products[0]}/>,1)
	ToastMaker.makeToast((props)=><AddedToCartNotification {...props} product={products[1]}/>,1)
	ToastMaker.makeToast((props)=><AddedToCartNotification {...props} product={products[2]}/>,1)

	return (
		<div className="App">
			<CartContext.Provider value = {{cart, addToCart, reduceFromCart, clearCart, getTotalPrice, products, productTable}}>
				<header>
					<TopMenu />
				</header>

				<Switch>
					<Route exact path="/" component={()=><Redirect to='/products'/>} />
					<Route exact path="/products" component={()=>PageWrapper('Products',<ProductListing/>)} />
					<Route exact path="/cart" component={()=>PageWrapper('Cart',<Cart/>)} />
					<Route exact path="/checkout" component={()=>PageWrapper('Checkout',<Checkout/>)} />
				</Switch>
			</CartContext.Provider>
		</div>
	);
}

export default App;