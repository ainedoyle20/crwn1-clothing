import React from 'react';

import { CartItemContainer, ImageContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => {
	return(
		<CartItemContainer>
			<ImageContainer alt='item' src={imageUrl}/>
			<ItemDetailsContainer>
				<span>{name}</span>
				<span>{quantity} x ${price}</span>
			</ItemDetailsContainer>
		</CartItemContainer>
	)
}

export default CartItem;