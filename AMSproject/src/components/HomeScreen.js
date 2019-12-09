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

// const TabNavigator = createBottomTabNavigator({
//     Map: {
//         screen: MapScreen
//     },
//     Profile: {
//         screen: ProfileScreen
//     },
//     About: {
//         screen: AboutScreen
//     },
// },
//     {
//         initialRouteName: 'Map',
//         activeColor: '#f0edf6',
//         inactiveColor: '#3e2465',
//         barStyle: { backgroundColor: '#694fad' },
//     });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Homescreen;