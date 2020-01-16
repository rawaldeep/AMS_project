import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import AboutScreen from './src/screens/AboutScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreenTest from './src/screens/LoginScreenTest';

//firebase
import * as firebase from 'firebase';
import firebaseConfig from './src/database/config';

firebase.initializeApp(firebaseConfig);
//firebase

class App extends Component {
  render() {
    return <AppContainer style={styles.container} />;
  }
}

const AppNavigator = createStackNavigator({

  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  Loading: {
    screen: LoadingScreen,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      header: null,
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      header: null,
    }
  },
}, {
  initialRouteName: 'Login'
},
);

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(188,222,253)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;