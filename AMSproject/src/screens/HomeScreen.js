import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';

class Homescreen extends Component {


    onPress = () => {
        this.props.navigation.navigate('Map');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>AMS Coffee Shop App</Text>
                <Button
                    title="Go to Map"
                    onPress={this.onPress}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Homescreen;