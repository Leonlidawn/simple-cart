import React ,{useContext, useEffect}from 'react';
import { CartContext } from '@/contexts';
import {withRouter} from 'react-router-dom';
import Star from '@/images/icons/starCircle.svg';
import './OrderConfirmation.scss';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

const OrderConfirmation = (props) => {
	const { orderId, setOrderId } = useContext(CartContext);
	
	useEffect(()=>{
		if(isEmpty(orderId)){
			props.history.push('./');
		}
		return ()=>setOrderId('');
	},[orderId])

	return (
		<div className="order-confirmation">
			<div className="card">
				<div className="card__body">
					<p>
					<img alt="star badge" src={Star} />
						<em>Your order has been processed</em>
					</p>
					<p>
						Your order ID is <em>#{orderId}</em>
					</p>
				</div>
			</div>
			<Link to="/products" className="card__return-button">
				Return to Products
			</Link>
		</div>
	)
}

export default withRouter(OrderConfirmation);