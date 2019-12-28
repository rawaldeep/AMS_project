import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import WelcomeScreen from './src/components/WelcomeScreen';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import MapScreen from './src/components/MapScreen';
import AboutScreen from './src/components/AboutScreen';
import ProfileScreen from './src/components/ProfileScreen';


class App extends Component {
  render() {
    return <AppContainer style={styles.container} />;
  }
}

const AppNavigator = createStackNavigator({

  Welcome: {
    screen: WelcomeScreen
  },
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: MapScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  About: {
    screen: AboutScreen
  }
}, {
    initialRouteName: 'Login'
  });

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;