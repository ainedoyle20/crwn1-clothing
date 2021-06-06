import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionContainer, CollectionTitleContainer, CollectionItemsContainer } from  './collectionpage.styles';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return(
		<CollectionContainer>
			<CollectionTitleContainer>{title.toUpperCase()}</CollectionTitleContainer>
			<CollectionItemsContainer>
				{
					items.map(item => {
						return <CollectionItem key={item.id} item={item} />
					})
				}
			</CollectionItemsContainer>
		</CollectionContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);