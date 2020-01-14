//Login Screen

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, fonts, padding, borders, dimensions } from '../styles/base';
import styled from 'styled-components';
import SocialButton from '../custom-components/SocialButton';
import Logo from '../custom-components/Logo';
import FacebookIcon from '../custom-components/Facebook';
import GmailIcon from '../custom-components/Gmail';

export default class Loginscreen extends Component {

    // async loginWithFacebook() {

    //     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('480576342865028', { permissions: ['public_profile'] })

    //     if (type == 'success') {

    //         const credential = firebase.auth.FacebookAuthProvider.credential(token)

    //         firebase.auth().signInWithCredential(credential).catch((error) => {
    //             console.log(error)
    //         })
    //     }
    // };

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Logo />
                    <SocialButton
                        text="Continue with Google"
                        textColor={'#FFFFFF;'}
                        backgroundColor={colors.primary}
                        border={borders.secondary}
                        fontSize={fonts.lg} />
                    <GmailIcon />
                    <SocialButton
                        text="Continue with Facebook"
                        textColor={colors.tertiary}
                        backgroundColor={'transparent'}
                        border={borders.primary} />
                    <FacebookIcon />
                </View>
            </Container>
        )
    }
}

const Container = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
    background-color: "rgb(188,222,253)";
`;

const styles = StyleSheet.create({
    container: {
        marginBottom: 55,
    },
});