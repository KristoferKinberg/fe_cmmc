import {takeEvery, put, call, select} from "redux-saga/effects";
import {toastr} from "react-redux-toastr";
import {makeGetRequest, makePostRequest, requestBody} from "../request/requestSaga";

import {
  actionSetAdmins,
  actionSetInvited,
  actionSetLoginError,
  actionSetLoginStatus,
  ADMIN_DO_LOGIN,
  GET_ADMINS, GET_INVITED,
  INVITE_ADMIN
} from "./adminActions";
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

/**
 * Watch do login
 * @returns {IterableIterator<<"FORK", ForkEffectDescriptor<RT>>>}
 */
export const watchDoLogin = function* () {
  yield takeEvery(
    ADMIN_DO_LOGIN,
    requestBody(makeDoLogin, [`Login`, `Couldn't login. Please try again later.`])
  );
};

/**
 * Make do Login
 * @param loginData
 * @returns {IterableIterator<<"CALL", CallEffectDescriptor>|<"PUT", PutEffectDescriptor<*>>|<"PUT", PutEffectDescriptor<{type}>>>}
 */
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

/**
 * Watch get users
 * @returns {IterableIterator<*>}
 */
export const watchGetAdmins = function* () {
  yield takeEvery(
    GET_ADMINS,
    requestBody(makeGetAdmins),
  );
};

/**
 * Make get users
 * @returns {IterableIterator<*>}
 */
const makeGetAdmins = function* () {
  const { data } = yield call(makeGetRequest, 'admins', { useToken: true });
  yield put(actionSetAdmins(data));
};


/**
 * Watch get invited
 * @returns {IterableIterator<*>}
 */
export const watchGetInvited = function* () {
  yield takeEvery(
    GET_INVITED,
    makeGetInvited
  );
};

/**
 * Make get invited
 * @returns {IterableIterator<*>}
 */
export const makeGetInvited = function* () {
  const { data: { data }} = yield call(makeGetRequest, 'invited', { useToken: true });
  yield put(actionSetInvited(data));
};
