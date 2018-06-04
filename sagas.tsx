import { takeLatest, put, yield, fork } from "redux-saga/effects";

function* fetchDog() {
  try {
    const response = yield fetch("https://dog.ceo/api/breeds/image/random");
    const data = JSON.parse(response._bodyText); // TODO: this feels wrong
    if (data.status === "success") {
      yield put({ type: "DOG_FETCH_REQUEST_SUCCESS", payload: data.message });
    } else {
      yield put({ type: "DOG_FETCH_REQUEST_ERROR" });
    }
  } catch (e) {
    yield put({ type: "DOG_FETCH_REQUEST_ERROR" });
  }
}

function* fetchBreeds() {
  try {
    const response = yield fetch("https://dog.ceo/api/breeds/list/all");
    const data = JSON.parse(response._bodyText); // TODO: this feels wrong
    if (data.status === "success") {
      console.log('success!', data)

      yield put({ type: "BREED_FETCH_REQUEST_SUCCESS", payload: Object.keys(data.message).concat(['all']).sort() });
    } else {
      console.log('error', data)
      yield put({ type: "BREED_FETCH_REQUEST_ERROR" });
    }
  } catch (e) {
    yield put({ type: "BREED_FETCH_REQUEST_ERROR" });
  }
}

function* fetchDogSaga() {
  yield takeLatest("DOG_FETCH_REQUEST", fetchDog);
}

function* fetchAvailableBreeds() {
  yield takeLatest("BREED_FETCH_REQUEST", fetchBreeds)
}

export default function* rootSaga() {
  yield [
    fork(fetchDogSaga),
    fork(fetchAvailableBreeds)

  ]
}
