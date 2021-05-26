import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return(
		<div className='collection-item'>
			<div 
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
				className='image'/>

			<div className='collection-footer'>
				<div className='name'>{name}</div>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
