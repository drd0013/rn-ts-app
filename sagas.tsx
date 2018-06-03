import {takeLatest, put} from "redux-saga/effects";

function* fetchDog() {
  console.log('fetching dog');
  yield put({type: "DOG_FETCH_SUCCESS", dogUrl: 'foo'})
}

function* fetchDogSaga() {
  yield takeLatest("DOG_FETCH_REQUEST", fetchDog)
}

export default fetchDogSaga