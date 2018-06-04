import React from "react";
import { StyleSheet, View, Picker, Text } from "react-native";

var options = [
  "Pitty",
  "Bully",
  "Nicey",
  "Meaney",
  "All",
  "long name mc longey"
];

class HeaderComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  handleValueChange = (newBreed: any) => {
    this.props.onBreedChange(newBreed)
  };

  get availableOptions() {
    return this.props.breeds.length > 0 ? this.props.breeds : options
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Selected Breed:</Text>
        <Picker
          selectedValue={this.props.selectedBreed}
          mode={"dropdown"}
          onValueChange={this.handleValueChange}
          style={styles.picker}
        >
          {this.availableOptions.map((option: any, index) => {
            return <Picker.Item label={option} value={option} key={index} />;
          })}
        </Picker>
      </View>
    );
  }
}

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    height: 48,
    justifyContent: "space-around",
    alignItems: "center",
    flexShrink: 0,
    flexDirection: "row"
  },
  picker: {
    height: 36,
    width: 240
  }
});
