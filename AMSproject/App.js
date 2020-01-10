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

//firebase
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAJM1dsmCOWdayRc4ohxQoNCkrlBhSECsg",
  authDomain: "coffeeshops-database.firebaseapp.com",
  databaseURL: "https://coffeeshops-database.firebaseio.com",
  projectId: "coffeeshops-database",
  storageBucket: "coffeeshops-database.appspot.com",
  messagingSenderId: "430651409692",
  appId: "1:430651409692:web:8c312867b62e60ddca26d9",
  measurementId: "G-3K8HH1YBYF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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