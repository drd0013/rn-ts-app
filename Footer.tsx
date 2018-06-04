import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Share,
  Platform
} from "react-native";

const FooterComponent = function(props: any) {
  const shareUrl = () => {
    let shareProps = {
      title: "Check out this cute doggo!",
      url: props.dogUrl,
      message:
        Platform.OS === "ios"
          ? "I thought you would like to see this dog!"
          : props.dogUrl
    };
    Share.share(shareProps);
  };
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={shareUrl}>
        <Text>Share this cute image!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.nextDoggo} activeOpacity={0.2}>
        <Text style={styles.next}>Next Picture ></Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterComponent;

const styles = StyleSheet.create({
  footerContainer: {
    height: 20,
    flexShrink: 0,
    justifyContent: 'flex-end',
    flex: 1
  },
  next: {
    color: "#a51"
  }
});
