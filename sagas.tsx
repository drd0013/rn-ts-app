import { takeLatest, put } from "redux-saga/effects";

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

function* fetchDogSaga() {
  yield takeLatest("DOG_FETCH_REQUEST", fetchDog);
}

export default fetchDogSaga;
