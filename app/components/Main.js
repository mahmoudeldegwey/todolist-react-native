import React, {Component} from 'react';
import {AppRegistry,StyleSheet, Text, View, TextInput, ScrollView ,TouchableOpacity} from 'react-native';

export default class Main extends Component {
  render() {
    return (

        <View>
        <Text >Welcome to React Native!</Text>
        <Text >To get started, edit App.js</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Main', () => Main);
