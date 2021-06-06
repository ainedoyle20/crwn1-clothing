import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, reduceItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, addItem, removeItem, reduceItem }) => {
	const { name, quantity, price, imageUrl } = cartItem;
	return(
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt='item'/>
			</ImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div onClick={() => reduceItem(cartItem)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addItem(cartItem)}>&#10095;</div>
			</QuantityContainer>
			<TextContainer>${price}</TextContainer>
			<RemoveButtonContainer onClick={() => removeItem(cartItem)}>&#10005;</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
	reduceItem: item => dispatch(reduceItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);