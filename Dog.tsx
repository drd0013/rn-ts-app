import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Text, View, Image } from 'react-native';
import { fetchDogUrl } from "./actions";

class Dog extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchDogUrl()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading your new dog image!</Text>
        this.props.dogError
        ? <Text> error loading dog image</Text>
        : <Image
          style={styles.image}
          source={{uri: this.props.dogUrl || 'https://images.dog.ceo/breeds/mountain-bernese/n02107683_5699.jpg'}}
        />
      </View>
    );
  }
}

const mapStateToProps = (state : any) => {
  return {
    dogUrl: state.dogUrl,
    dogError: state.requestError
  }
}

export default connect(
    mapStateToProps,
    {fetchDogUrl}
)(Dog)


//Connect state to props

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});