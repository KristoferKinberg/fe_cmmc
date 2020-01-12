import {all} from "redux-saga/effects";
import {watchGetHomeData} from "../home/homeSaga";
import {watchGetViewData} from "../views/viewsSaga";

export function* rootSaga() {
  yield all([
    watchGetHomeData(),
    watchGetViewData()
  ]);
}
