import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collectionpage.styles.scss';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return(
		<div className='collection-page'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='items'>
				{
					items.map(item => {
						return <CollectionItem key={item.id} item={item} />
					})
				}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);