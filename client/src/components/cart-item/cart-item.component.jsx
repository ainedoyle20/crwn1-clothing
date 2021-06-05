import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => {
	return(
		<div className='cart-item'>
			<img alt='item' src={imageUrl}/>
			<span className='name'>{name}</span>
			<span className='price'>{quantity} x ${price}</span>
		</div>
	)
}

export default CartItem;