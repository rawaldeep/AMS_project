import React from 'react';
import styled from 'styled-components';
import * as Google from 'expo-google-app-auth';

const SocialButton = ({ navigate }, props) => (

	<ButtonContainer
		onPress={
			signInWithGoogleAsync = async () => {
				try {
					const result = await Google.logInAsync({
						iosClientId: '430651409692-fg9hb7lvuhp2e73dg1ami28g7mpgsh1n.apps.googleusercontent.com',
						scopes: ['profile', 'email'],
					});

					if (result.type === 'success') {
						navigate.navigation.navigate('Map');
						return result.accessToken;
					} else {
						return { cancelled: true };
					}
				} catch (e) {
					return { error: true };
				}
			}
		}
		backgroundColor={props.backgroundColor}
		border={props.border}
	>
		<ButtonText textColor={props.textColor}>{props.text}</ButtonText>
	</ButtonContainer>

);

const ButtonContainer = styled.TouchableOpacity`
	width: 340px;
	height: 61px;
	padding: 10px;
	margin-bottom: 24px;
	border-radius: 46px;
	border: ${props => props.border};
	box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
	background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
	font-size: 22px;
	color: ${props => props.textColor};
	text-align: center;
	line-height: 35px
`;

export default SocialButton;