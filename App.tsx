import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import dogSaga from './sagas'
import dogStore from './reducer'
import Dog from "./Dog.js";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  dogStore,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(dogSaga);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Dog/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
