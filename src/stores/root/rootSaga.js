import {all} from "redux-saga/effects";
import {watchGetHomeData} from "../home/homeSaga";
import {watchGetViewData, watchGetEntityData} from "../views/viewsSaga";
import {watchGetEntity, watchRemoveEntity, watchUpdateEntity} from "../entities/entitiesSagas";
import {watchDoLogin, watchGetAdmins, watchGetInvited} from "../admin/adminSaga";

export function* rootSaga() {
  yield all([
    watchGetHomeData(),
    watchGetViewData(),
    watchGetEntityData(),
    // watchUpdateEntity(),
    watchDoLogin(),
    watchGetAdmins(),
    watchGetInvited(),
    watchRemoveEntity(),
    watchGetEntity(),
  ]);
}
