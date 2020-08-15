import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '@/contexts';
import { isEmpty } from 'lodash';
import emailValidator from 'email-validator';
import Toggle from '@/components/Toggle/Toggle'
import './Checkout.scss';
import { Link } from 'react-router-dom';

const Checkout = () => {
	const { getTotalPrice } = useContext(CartContext);
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');

	useEffect(() => {
		document.getElementById('checkout__form').addEventListener(
			"submit", handleOnSubmit, false
		)
	}, []
	)
	const errorMesages = {
		'name': {
			required: 'Please enter your name',
		},
		'email': {
			required: 'Please enter your name',
			valid: 'Please enter an valid email'
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
			setNameError(errorMesages.email.required);
			return false;
		} else if (!emailValidator.validate(email)) {
			setEmailError(errorMesages.email.valid);
			return false;
		}
		setEmailError('');
		return true;
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();
		let { name, email } = e.target;
		name = name.value;
		email = email.value;
		if (validateName(name) && validateEmail(email)) {

		} else {

		}

		// console.log({name: name.value, email: email.value})
	}

	return (
		<div className="checkout">
			<form id="checkout__form" className="checkout__form">
				<label>
					Your name
					</label>
				<input onChange={(e) => validateName(e.target.value)} type="text" name="name" placeholder="e.g Jane Doe" data-error-message='' />
				<span className="checkout__form__error">{nameError}</span>
				<label>
					Your email
					</label>
				<input onChange={(e) => validateEmail(e.target.value)} type="text" name="email" placeholder="e.g jane@company.co" data-error-message='' />
				<span className="checkout__form__error">{emailError}</span>
				<div className="condition">
					<Toggle />	<span>I agree to the terms and conditions</span>
				</div>
				<input type="submit" value={`Pay $${getTotalPrice()}`} />
			</form>
		</div>
	)
}

export default Checkout;