import {all} from "redux-saga/effects";
import {watchGetHomeData} from "../home/homeSaga";

export function* rootSaga() {
  yield all([
    watchGetHomeData()
  ]);
}
