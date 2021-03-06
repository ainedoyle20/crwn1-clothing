import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewStyle } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
	return(
		<CollectionsOverviewStyle>
			{
				collections.map(({id, ...otherCollectionProps }) => {
					return <CollectionPreview key={id} {...otherCollectionProps}/>
				})
			}
		</CollectionsOverviewStyle>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);