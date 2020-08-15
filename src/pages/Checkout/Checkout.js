import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '@/contexts';
import { isEmpty } from 'lodash';
import emailValidator from 'email-validator';
import Toggle from '@/components/Toggle/Toggle';
import OrderConfirmation from './OrderConfirmation/OrderConfirmation';
import './Checkout.scss';

const Checkout = () => {
	const { getTotalPrice, cart } = useContext(CartContext);
	const [agree, setAgree] = useState(false);

	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [agreeError, setAgreeError] = useState('');
	const [orderId, setOrderId] = useState('');

	useEffect(() => {
		const form = document.getElementById('checkout__form');
		if (!isEmpty(form)) {
			form.addEventListener(
				"submit", handleOnSubmit, false
			)
		}
	})

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
		}
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

	//should be async, and returns a order id
	const pay = (data) => {
		console.log(data);
		setOrderId(11);
		//TODO implement backend, success
	}

	//just an expression, in this way form is not rerendered everytime so that focus is preserved
	const CheckoutForm =(
		<div className="checkout">
			<form id="checkout__form" className="checkout__form">
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
						<Toggle onClick={()=>setAgree(!agree)}/>	<span>I agree to the terms and conditions</span>
					</div>
					<span className="checkout__form__error">{agreeError}</span>
				</div>
				<input type="submit" value={`Pay $${getTotalPrice()}`} />
			</form>
		</div>)
	return (
		<>
			{
				isEmpty(orderId)
					? CheckoutForm
					: <OrderConfirmation id={orderId} />
			}
		</>
	)
}

export default Checkout;