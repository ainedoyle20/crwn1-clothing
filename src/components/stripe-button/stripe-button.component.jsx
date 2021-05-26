import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import Crown from '../../assets/crown.svg';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51IsruTAf5D9mxr02PIJJnHqjMPgh8C2mQoeMyGqc5Q3b4kvnsxpfgSu75kqUCur6562vgcaILuENBAPWYioht8ZE00X1fhB91p';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successfull')
	}

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
			taken={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;