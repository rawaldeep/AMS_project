//Login Screen

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, fonts, padding, borders, dimensions } from '../styles/base';
import styled from 'styled-components';
import SocialButton from '../custom-components/SocialButton';
import Logo from '../custom-components/Logo';
import FacebookIcon from '../custom-components/Facebook';
import GmailIcon from '../custom-components/Gmail';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

export default class Loginscreen extends Component {

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    }

    onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    // googleUser.getAuthResponse().id_token);
                    googleUser.idToken,
                    googleUser.accessToken
                );
                // Sign in with credential from the Google user.
                firebase.auth().signInWithCredential(credential)
                    .then(() => {
                        console.log('User Signed In!');
                    })
                    .catch(error => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
            } else {
                console.log('User already signed-in Firebase.');
            }
        });
    }

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: '430651409692-fg9hb7lvuhp2e73dg1ami28g7mpgsh1n.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {
                this.onSignIn(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Logo />
                    <SocialButton
                        onPress={this.signInWithGoogleAsync}
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