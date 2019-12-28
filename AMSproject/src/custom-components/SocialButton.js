import React, { Component } from 'react';
import styled from 'styled-components';

const SocialButton = props => (
	<ButtonContainer
		onPress={onPress = () => {
			alert('You are logged in!');
		}}
		backgroundColor={props.backgroundColor}
	>
		<ButtonText textColor={props.textColor}>{props.text}</ButtonText>
	</ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
	width: 238px;
	height: 59px;
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 34px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
	font-size: 30px;
	color: ${props => props.textColor};
	text-align: center;
	line-height: 35px;
`;

export default SocialButton;