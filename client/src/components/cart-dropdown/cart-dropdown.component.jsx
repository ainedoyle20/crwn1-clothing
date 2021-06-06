import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CheckoutButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return(
		<CartDropdownContainer>
			<CartItemsContainer>
				{ cartItems.length 
					?(cartItems.map(cartItem => {
							return <CartItem key={cartItem.id} item={cartItem}/>
						}))
					: (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
				}
			</CartItemsContainer>
			<CheckoutButton 
				onClick={() => {
					dispatch(toggleCartHidden())
					return history.push('/checkout')
				}}
			>
			GO TO CHECKOUT
			</CheckoutButton>
		</CartDropdownContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));