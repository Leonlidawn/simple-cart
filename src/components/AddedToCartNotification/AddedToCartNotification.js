import React, { useState, useEffect } from 'react';
import { ReactComponent as CrossCircle } from '@/images/icons/crossCircle.svg';
import './AddedToCartNotification.scss';

const AddedToCartNotification = ({ product, onClose, time }) => {
	const { name, bgColor } = product;
	const [timeoutId, setTimeoutId] = useState();
	const [removed, setRemoved] = useState(false);

	useEffect(
		() =>{ 
				setTimeoutId(setTimeout(() =>setRemoved(true),time-500));
				setTimeoutId(setTimeout(() =>onClose(),time));
		}, []
	)
	const handleClose = () => {
		clearTimeout(timeoutId);
		onClose();
	}

	return (
		<div className={`added-to-cart-notification ${removed? 'added-to-cart-notification--removed':''}`} style={{ '--bg-color': bgColor }}>
			<span>
				<CrossCircle className="added-to-cart-notification__remove-icon" width={30} height={30} onClick={ handleClose } />
				<em>{name}</em>	has been added to your cart.
			</span>
		</div>
	)
}

export default AddedToCartNotification;