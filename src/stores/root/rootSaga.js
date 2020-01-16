import {all} from "redux-saga/effects";
import {watchGetHomeData} from "../home/homeSaga";
import {watchGetViewData} from "../views/viewsSaga";
import {watchUpdateEntity} from "../entities/entitiesSagas";
import {watchDoLogin} from "../admin/adminSaga";

export function* rootSaga() {
  yield all([
    watchGetHomeData(),
    watchGetViewData(),
    watchUpdateEntity(),
    watchDoLogin(),
  ]);
}
