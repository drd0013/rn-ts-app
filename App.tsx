import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import Dog from "./Dog";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Dog />
      </Provider>
    );
  }
}
