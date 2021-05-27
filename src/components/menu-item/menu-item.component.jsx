import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
	return(
		<MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)} >
			<BackgroundImageContainer 
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
				className='background-image' 
			/>
			<ContentContainer className='content'>
				<TitleContainer>{title.toUpperCase()}</TitleContainer>
				<SubtitleContainer>SHOP NOW</SubtitleContainer>
			</ContentContainer>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);