import React from "react";
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native'

const FooterComponent = function(props: any) {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={props.nextDoggo} activeOpacity={0.2}>
        <Text style={styles.next}>
          Next Picture >
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default FooterComponent;

const styles = StyleSheet.create({
  footerContainer: {
    flexShrink: 0,
    justifyContent: 'flex-end',
    flex: 1
  },
  next: {
    color: '#a51'
  }
});