import React, {useContext} from 'react';
import { CartContext } from '@/contexts';
import { ReactComponent as Plus } from '@/images/icons/plus.svg';

import './Cart.scss';
import { getCart, reduceFromCart } from '@/utils/cartSession';

const Cart = () => {
	const {reduceFromCart,getCart} = useContext(CartContext);
	return (
		<div className="cart">

		</div>
	)
}

export default Cart;