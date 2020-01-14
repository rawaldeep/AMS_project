import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Button } from 'native-base';

export default class LoginscreenTest extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Image
                    width="1" height="1"
                    source={require('../assets/images/svg/logo/sustainLogo.png')} />
                <Button style={styles.style}>
                    <Text style={styles.text}>
                        Continue with Facebook
                </Text>

                </Button>
                <Button style={styles.style}>
                    <Text style={styles.text}>
                        Continue with Google
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
        position: 'absolute',
        bottom: 100,

    },
    text: {
        lineHeight: 43,
        color: 'white',
    },
});