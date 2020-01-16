import {takeEvery, put, call, select} from "redux-saga/effects";
import {toastr} from "react-redux-toastr";
import {makePostRequest, requestBody} from "../request/requestSaga";

import {actionSetInvited, actionSetLoginError, actionSetLoginStatus, ADMIN_DO_LOGIN, INVITE_ADMIN} from "./adminActions";
import {actionChangeView} from "../page/pageActions";
import {MEMBER} from "../../constants/viewsConstants";

/**
 * Watch invite user
 * @returns {IterableIterator<*>}
 */

export const watchInviteUser = function* () {
  yield takeEvery(
    INVITE_ADMIN,
    requestBody(makeInviteUser, [`Admin`, `Something went wrong. Please try again later`])
  );
};

/**
 * Make invite user
 * @param email
 * @returns {IterableIterator<*>}
 */
const makeInviteUser = function* ({ email }) {
  const { data: { inviteStatus, result, msg }} = yield call(makePostRequest, 'admin/invite_admin', { email }, { useToken: false });
  const invited = yield select(state => state.users.invited);

  if (inviteStatus === 1){
    toastr.success(`Admin`, `${result.email} has been invited.`);
    yield put(actionSetInvited([ ...invited, result ]));
  }

  if (inviteStatus === 2) toastr.error(`Admin`, `Couldn't be invited. ${msg}`);
};




export const watchDoLogin = function* () {
  yield takeEvery(
    ADMIN_DO_LOGIN,
    requestBody(makeDoLogin, [`Login`, `Couldn't login. Please try again later.`])
  );
};

export const makeDoLogin = function* ({ loginData }) {
  const { data: { error, msg, token }, data} = yield call(makePostRequest, 'admin/login', loginData, { useToken: false });

  if (error) {
    yield put(actionSetLoginError(msg));
  } else {
    localStorage.setItem('jwt', token);
    yield put(actionChangeView(MEMBER));
    yield put(actionSetLoginStatus(data));
  }
};
