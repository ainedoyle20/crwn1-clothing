import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import Crown from '../../assets/crown.svg';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51IsruTAf5D9mxr02PIJJnHqjMPgh8C2mQoeMyGqc5Q3b4kvnsxpfgSu75kqUCur6562vgcaILuENBAPWYioht8ZE00X1fhB91p';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		}).then(response => {
			alert('Payment Successfull');
		}).catch(error => {
			console.log('Payment error: ', JSON.parse(error));
			alert('There was an issue with your payment. Please make sure you use the provided test credit card.')
		});
	};

	return (
		<StripeCheckout 
			label='Pay Now'
			name='CRWN Clothing1 LTd.'
			billingAddress
			shippingAddress
			image={Crown}
			description={`Your price is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;