import {all} from "redux-saga/effects";
import {watchGetHomeData} from "../home/homeSaga";
import {watchGetViewData} from "../views/viewsSaga";
import {watchUpdateEntity} from "../entities/entitiesSagas";
import {watchDoLogin, watchGetAdmins, watchGetInvited} from "../admin/adminSaga";

export function* rootSaga() {
  yield all([
    watchGetHomeData(),
    watchGetViewData(),
    watchUpdateEntity(),
    watchDoLogin(),
    watchGetAdmins(),
    watchGetInvited(),
  ]);
}
