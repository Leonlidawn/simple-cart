import React from 'react';
import Star from '@/images/icons/starCircle.svg';
import './OrderConfirmation.scss';
import { Link } from 'react-router-dom';

const OrderConfirmation = ({ id }) => {

	return (
		<div className="order-confirmation">
			<div className="card">
				<div className="card__body">
					<p>
					<img alt="star badge" src={Star} />
						<em>Your order has been processed</em>
					</p>
					<p>
						Your order ID is <em>#{id}</em>
					</p>
				</div>
			</div>
			<Link to="/products" className="card__return-button">
				Return to Products
			</Link>
		</div>
	)
}

export default OrderConfirmation;