import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import emailValidator from 'email-validator';
import axios from 'axios';

import { CartContext } from '@/contexts';
import Toggle from '@/components/Toggle/Toggle';
import { getEnvVariable } from '@/utils/utils';
import './Checkout.scss';

const Checkout = (props) => {
	const { getTotalPrice, cart, clearCart, setOrderId } = useContext(CartContext);
	const [agree, setAgree] = useState(false);
	const [loading, setLoading] = useState(false);
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [agreeError, setAgreeError] = useState('');
	const [payError, setPayError] = useState('');

	const errorMesages = {
		'name': {
			required: 'Please enter your name',
		},
		'email': {
			required: 'Please enter your email',
			valid: 'Please enter an valid email'
		},
		'agree': {
			required: 'Please agree the terms and conditions',
		},
		'pay': {
			faild: 'Sorry, payment failed. Please try again.',
		},
	}

	const validateName = (name) => {
		if (isEmpty(name)) {
			setNameError(errorMesages.name.required);
			return false;
		}
		setNameError('');
		return true;
	}
	const validateEmail = (email) => {
		if (isEmpty(email)) {
			setEmailError(errorMesages.email.required);
			return false;
		} else if (!emailValidator.validate(email)) {
			setEmailError(errorMesages.email.valid);
			return false;
		}
		setEmailError('');
		return true;
	}

	const checkAgree = () => {
		agree
			? setAgreeError('')
			: setAgreeError(errorMesages.agree.required)

		return agree;
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();
		let { name, email } = e.target;
		name = name.value;
		email = email.value;

		//run through all validators so that all error messages are shown.
		const isValid = [() => validateName(name), () => validateEmail(email), () => checkAgree()].reduce(
			(result, fun) => {
				const isValid = fun();
				return isValid && result;
			}, true
		);

		if (isValid) {
			pay({ name, email, cart });
		}
	}

	const pay = (data) => {
		setLoading(true);
		axios.post(`${getEnvVariable('BACKEND_URL')}/orders`, data, { timeout: 20000 })
			.then(
				(res) => {
					const { data, status } = res;
					if (status === 200) {
						setOrderId(data.orderId);
						clearCart();
						props.history.push('./order-confirmation');
					} else {
						throw Error('checkout faild');
					}
				}
			)
			.catch((error) => {
				setPayError(errorMesages.pay.faild);
			}).finally(
				() => setLoading(false)
			);
	}

	return (
		<div className="checkout">
			<form id="checkout__form" className="checkout__form" onSubmit={handleOnSubmit}>
				<label>
					Your name
				</label>
				<input key="name" onChange={(e) => validateName(e.target)} type="text" name="name" placeholder="e.g Jane Doe" />
				<span className="checkout__form__error">{nameError}</span>
				<label>
					Your email
				</label>
				<input key="email" onChange={(e) => validateEmail(e.target.value)} type="text" name="email" placeholder="e.g jane@company.co" />
				<span className="checkout__form__error">{emailError}</span>
				<div className="condition">
					<div className="condition__content">
						<Toggle onClick={() => setAgree(!agree)} />	<span>I agree to the terms and conditions</span>
					</div>
					<span className="checkout__form__error">{agreeError}</span>
				</div>
				<input type="submit" value={`Pay $${getTotalPrice()}`} disabled={isEmpty(cart) || loading} />
				<span className="checkout__form__error">{payError}</span>
			</form>
		</div>
	)
}

export default withRouter(Checkout);