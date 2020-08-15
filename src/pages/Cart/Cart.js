import React, { useContext } from 'react';
import { CartContext } from '@/contexts';
import { Link } from 'react-router-dom';
import { ReactComponent as CrossCircle } from '@/images/icons/crossCircle.svg';
import  RightArrow from '@/images/icons/rightArrow.svg';
import './Cart.scss';


const Cart = () => {
	const { reduceFromCart, cart, getTotalPrice, productTable } = useContext(CartContext);

	const renderProductNTimes = (pid, n) => {
		const list = [];
		for (let i = 0; i < n; i++) {
			const { name, price, bgColor } = productTable[pid];
			list.push(
				<div key={`pid${i}`} className="product-card" style={{ '--bg-color': bgColor }}>
					<div className="product-card__remove-icon"><CrossCircle width={30} height={30} onClick={() => reduceFromCart(pid)} /></div>
					<div className="product-card__name">{name}</div>
					<div className="product-card__price price">{Math.round(price)}</div>
				</div>
			)
		}
		return [...list];
	}

	return (
		<div className="cart">
			<div className="cart__items">
				{Object.entries(cart).map(
					([pid, n]) => renderProductNTimes(pid, n)
				)}
			</div>
			<div className="cart__bottom-section">
				<div className="cart__total-price price">
					{getTotalPrice()}
				</div>
				<Link to='/checkout' className="cart__checkout-button" >
						<span className="cart__checkout-button__text">Buy Now</span>
						<img src={RightArrow}/>
				</Link>
			</div>
		</div>
	)
}

export default Cart;