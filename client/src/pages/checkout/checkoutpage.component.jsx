import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
	CheckoutPageContainer, 
	CheckoutHeaderContainer,
	CheckoutHeaderBlockContainer,
	TotalContainer,
	TestWarningContainer 
} from './checkoutpage.styles';

const CheckoutPage = ({ cartItems, total }) => {
	return(
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<CheckoutHeaderBlockContainer>
					<span>Product</span>
				</CheckoutHeaderBlockContainer>
				<CheckoutHeaderBlockContainer>
					<span>Description</span>
				</CheckoutHeaderBlockContainer>
				<CheckoutHeaderBlockContainer>
					<span>Quantity</span>
				</CheckoutHeaderBlockContainer>
				<CheckoutHeaderBlockContainer>
					<span>Price</span>
				</CheckoutHeaderBlockContainer>
				<CheckoutHeaderBlockContainer>
					<span>Remove</span>
				</CheckoutHeaderBlockContainer>
			</CheckoutHeaderContainer>
			{
				cartItems.map(cartItem => {
					return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
				})
			}

			<TotalContainer>
				<span>{total}</span>
			</TotalContainer>
			<TestWarningContainer>
				*Please use the following test credit card for payments*
				<br/>
				4242 4242 4242 4242 - Exp: Any Future Date - CW:123
			</TestWarningContainer>
			<StripeCheckoutButton price={total}/>
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);