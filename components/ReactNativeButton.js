import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReactNativeButton extends Component {
  style = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    largeText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    smallText: {
      fontSize: 12,
      textAlign: 'center',
      margin: 10,
    },
  }

  render() {
    return (
      <View style={this.style.container}>
        <Text style={this.style.largeText}>
          Welcome to React Native!
        </Text>
        <Text style={this.style.smallText}>
          To get started, edit index.[platform].js
        </Text>
      </View>
    );
  }
}
