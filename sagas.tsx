import { takeLatest, put } from "redux-saga/effects";

function* fetchDog() {
  console.log('fetching dog');
  try {
    const response = yield fetch('https://dog.ceo/api/breeds/image/random');
    const data = response.json();
    if (data.success) {
      yield put({type: 'DOG_FETCH_REQUEST_SUCCESS', payload: data.message})
    } else {
      yield put({type: 'DOG_FETCH_REQUEST_ERROR'})
    }
  } catch (e) {
    yield put({type: 'DOG_FETCH_REQUEST_ERROR'})
  }
}

function* fetchDogSaga() {
  yield takeLatest("DOG_FETCH_REQUEST", fetchDog)
}

export default fetchDogSaga