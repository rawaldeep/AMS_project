import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Button } from 'native-base';
import * as Google from 'expo-google-app-auth';

class LoginScreenTest extends Component {

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: '430651409692-fg9hb7lvuhp2e73dg1ami28g7mpgsh1n.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                this.props.navigation.navigate('Map');
                return result.accessToken;
            } else {
                this.props.navigation.navigate('Login')
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    };

    render() {
        return (
            <Container style={styles.container}>
                <Image
                    width="1" height="1"
                    source={require('../assets/images/svg/logo/sustainLogo.png')} />
                <Button onPress={this.onPress.signInWithGoogleAsync} style={styles.style}>
                    <Text style={styles.text}>
                        Continue with Facebook
                </Text>
                </Button>
            </Container>
        )
    }
}

const screenWidth = Math.round(Dimensions.get('window').width)
const horizontalMargin = (screenWidth - 270) / 2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    style: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5100',
        width: 270,
        height: 60,
        borderTopColor: 'transparent',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 4, height: 0 },
        shadowRadius: 4,
        shadowOpacity: 1,
        borderRadius: 46,
        marginBottom: '7%',
        marginHorizontal: horizontalMargin,
    },
    text: {
        color: 'white',
    },
});

export default LoginScreenTest;