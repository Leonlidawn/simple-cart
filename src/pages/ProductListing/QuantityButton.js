import React, { useContext } from 'react';
import { CartContext } from '@/contexts';
import { ReactComponent as Plus } from '@/images/icons/plus.svg';
import { addToCartSession, getCartSession } from '@/utils/cartSession';
import './QuantityButton.scss';

const QuantityButton = ({ productId }) => {
	const { addToCart } = useContext(CartContext);
	const handleClick = () => {
		addToCart(productId);
	}
	return (
		<div className="quantity-button quantity-button--add" onClick={handleClick}>
			<div className="quantity-button__text">
				Add
					</div>
			<div className="quantity-button__icon-area">
				<Plus height={15} width={15} className="plus-icon" />
			</div>
		</div>
	)
}

export default QuantityButton;