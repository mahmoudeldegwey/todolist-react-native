import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView ,TouchableOpacity,FlatList,Button} from 'react-native';
import Note from './Note';

export default class navigate extends Component {

static navigationOptions = {
    header: null,
  };
  
  render() {
       const { navigate } = this.props.navigation; 

    return (

        <View>
          <Button title="Add New Todo List" onPress = {() => navigate('Main')} />
      </View>
    );
  }

}
