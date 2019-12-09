import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Loginscreen extends Component {


    onPress = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginBottom: 20 }}>Login screen</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}>
                    <Text style={{ fontSize: 30 }}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}>
                    <Text style={{ fontSize: 30 }}> Sign up </Text>
                </TouchableOpacity>
                {/* <Button
                    title="Login"
                    onPress={this.onPress}
                />
                <Button
                    title="Sign up"
                    onPress={this.onPress}
                /> */}
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 100,
    },
    button: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
        width: 200,
    },
});