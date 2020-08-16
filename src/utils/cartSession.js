import sessionHelper from './sessionHelper';
import { get, isEmpty } from 'lodash';

const CART = 'cart';
const getCartSession = () => {
	const cart = (sessionHelper.getSession(CART));
	return isEmpty(cart) ? {} : cart;
}

const addToCartSession = (productId) => {
	const cart = sessionHelper.getSession(CART) || {};
	cart[productId] = get(cart, productId, 0) + 1;
	sessionHelper.updateSession(CART, cart);
}

const reduceFromCartSession = (productId) => {
	const cart = sessionHelper.getSession(CART);
	if (!isEmpty(cart)) {
		const quantity = cart[productId];
		if (quantity > 0) {
			cart[productId] = quantity - 1;
			sessionHelper.updateSession(CART, cart);
		} else {
			delete cart[productId];
		}
	}
}

const resetCartSession = () => {
	sessionHelper.updateSession(CART, {});
}

const clearCartSession = () => {
	sessionHelper.removeSession(CART);
}

export { addToCartSession, reduceFromCartSession, resetCartSession, clearCartSession, getCartSession }
