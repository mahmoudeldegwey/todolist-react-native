

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Main from './app/components/Main';
import navigate from './app/components/navigate';

export default class App extends Component {


  

  render() {

    return (
      <AppNavigtor />
    );

  }
}

const AppNavigtor = createStackNavigator({
    
    navigate:navigate,
    Main: Main,

});