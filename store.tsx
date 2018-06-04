/* globals __DEV__ */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let middlewareModules = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhacer = composeEnhancers(applyMiddleware(...middlewareModules));

export default function configureStore() {
  let store = createStore(reducer, enhacer);

  sagaMiddleware.run(rootSaga);

  return store;
}
