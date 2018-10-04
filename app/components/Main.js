import React, {Component} from 'react';
import {AppRegistry,StyleSheet, Text, View, TextInput, ScrollView ,TouchableOpacity} from 'react-native';

export default class Main extends Component {
  render() {
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Notes</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>

            </ScrollView>
            <View style={styles.footer}>
                <TextInput 
                    placeholder="Add note"
                    placeholderTextColor="white"
                    style={styles.textinput}
                    underlineColorAndroid="transparent"
                >

                </TextInput>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
        header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textinput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});

AppRegistry.registerComponent('Main', () => Main);
