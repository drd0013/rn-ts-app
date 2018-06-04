import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Share,
  Platform, processColor
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
        <Text style={styles.share}>Share this cute image!</Text>
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
    paddingHorizontal: 12,
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
    flexDirection: "row",
  },
  next: {
    color: "#a51"
  },
  share: {
    color: '#19a'
  }
});
