import { takeLatest, put, fork, select } from "redux-saga/effects";

const getSelectedBreed = (state: any) => state.selectedBreed


function* fetchDog(action: any) {
  let url, selectedBreed;
  if (action.payload) {
    selectedBreed = action.payload
  } else {
    selectedBreed = yield select(getSelectedBreed);
  }
  try {
    if (selectedBreed === 'all') {
      url = "https://dog.ceo/api/breeds/image/random";
    } else {
      url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
    }
    const response = yield fetch(url);
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
      yield put({ type: "BREED_FETCH_REQUEST_SUCCESS", payload: Object.keys(data.message).concat(['all']).sort() });
    } else {
      yield put({ type: "BREED_FETCH_REQUEST_ERROR" });
    }
  } catch (e) {
    yield put({ type: "BREED_FETCH_REQUEST_ERROR" });
  }
}

function* fetchDogSaga() {
  const action = yield takeLatest(["DOG_FETCH_REQUEST", "SET_SELECTED_BREED"], fetchDog);
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
