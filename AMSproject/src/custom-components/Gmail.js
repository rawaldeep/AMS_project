
import React from 'react';
import styled from 'styled-components'
import { Image } from 'react-native';

const GmailIcon = props => (
    <IconContainer
    >
        <Image source={require('../assets/images/svg/logo/gmailLogo.png')}></Image>
    </IconContainer>
);

const IconContainer = styled.View`
	width: 20px;
	height: 20px;
    position: absolute;
    bottom: 130px;
    left: 30px;
`;

export default GmailIcon;