import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Bookcase extends Component {
  render() {
    return (
      <View style = { styles.container }>
        <Text style = { styles.tittle }>
          Bookcase
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  tittle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
