import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

export default class Mapscreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Map Screen</Text>
                <Button
                    title='Sign Out'
                    onPress={() => firebase.auth().signOut()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});