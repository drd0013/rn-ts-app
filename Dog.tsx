import React from "react";
import { connect } from "react-redux";
import {StyleSheet, Text, View, Image, Platform, Dimensions} from "react-native";
import { fetchDogUrl, fetchAvailableBreeds, setSelectedBreed } from "./actions";
import Footer from "./Footer";
import HeaderComponent from "./Header";

class DogContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDogUrl();
    this.props.fetchAvailableBreeds();
  }

  renderLoadingMessage() {
    return <Text>Loading your new dog image!</Text>;
  }

  renderLoadedState() {
    if (this.props.dogError) {
      return <Text> error loading dog image</Text>;
    } else if (this.props.dogUrl) {
      return (
        <View style={styles.mainContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                this.props.dogUrl ||
                "https://images.dog.ceo/breeds/mountain-bernese/n02107683_5699.jpg"
            }}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent
          breeds={this.props.availableBreeds}
          selectedBreed={this.props.selectedBreed}
          onBreedChange={this.props.setSelectedBreed}
        />
        <View style={styles.mainContainer}>
          {this.props.dogError || this.props.dogUrl
            ? this.renderLoadedState()
            : this.renderLoadingMessage()}
        </View>
        <Footer nextDoggo={this.props.fetchDogUrl} dogUrl={this.props.dogUrl} />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    dogUrl: state.dogUrl,
    dogError: state.requestError,
    availableBreeds: state.availableBreeds,
    selectedBreed: state.selectedBreed
  };
};

export default connect(mapStateToProps, {
  fetchAvailableBreeds,
  fetchDogUrl,
  setSelectedBreed
})(DogContainer);

//Connect state to props

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: Dimensions.get('window').width - 24,
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    marginTop: Platform.OS === "ios" ? 20 : 0
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
