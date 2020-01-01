
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';


export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    width="50" height="50"
                    source={require('../assets/images/svg/logo/sustainLogo.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
