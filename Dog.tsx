import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Dog extends React.Component {
  componentDidMount() {
    console.log('trigger action')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading your new dog image!</Text>
      </View>
    );
  }
}

//Connect state to props

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});