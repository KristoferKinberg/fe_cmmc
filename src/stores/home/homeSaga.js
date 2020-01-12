import { takeEvery, call } from 'redux-saga/effects';
import {makeGetRequest} from "../request/requestSaga";
import {GET_HOME_DATA} from "./homeActions";

export const watchGetHomeData = function* () {
  yield takeEvery(
    GET_HOME_DATA,
    makeGetHomeData
  )
};

const makeGetHomeData = function* () {
  const { data } = yield call(makeGetRequest, 'home');
  console.log(data);
};
