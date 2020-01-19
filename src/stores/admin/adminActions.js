import actionCreator from "../../services/actionCreator";
import {CREATE, SPECIFIC, UPDATE} from "../../constants/constants";

export const ADMIN_DO_LOGIN = 'ADMIN_DO_LOGIN';
export const GET_EMAIL = 'GET_EMAIL';
export const SAVE_USER = 'SAVE_USER';
export const UPDATE_FORM = 'UPDATE_FORM';
export const RESET_PASS_BY_EMAIL = 'RESET_PASS_BY_EMAIL';
export const GET_NEW_PASS_EMAIL = 'GET_NEW_PASS_EMAIL';
export const SAVE_NEW_PASSWORD = 'SAVE_NEW_PASSWORD';
export const UPDATE_NEW_PASS_FORM_DATA = 'UPDATE_NEW_PASS_FORM_DATA';
export const SET_INVITED = 'SET_INVITED';
export const ADMIN_SET_LOGIN_ERROR = 'ADMIN_SET_LOGIN_ERROR';
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const GET_INVITED = 'GET_INVITED';
export const GET_ADMINS = 'GET_ADMINS';
export const SET_ADMINS = 'SET_ADMINS';
export const INVITE_ADMIN = 'INVITE_ADMIN';
export const REMOVE_INVITED = 'REMOVE_INVITED';
export const REMOVE_USER = 'REMOVE_USER';
export const RESEND_INVITE = 'RESEND_INVITE';

export const ADMIN_UPDATE_DRAFT = 'ADMIN_UPDATE_DRAFT';
export const ADMIN_RESET_DRAFT = 'ADMIN_RESET_DRAFT';
export const ADMIN_PREP_NEW_DRAFT = 'ADMIN_PREP_NEW_DRAFT';
export const ADMIN_CLEAR_DRAFT = 'ADMIN_CLEAR_DRAFT';
export const ADMIN_SET_DIRTY_DRAFT = 'ADMIN_SET_DIRTY_DRAFT';

export const actionAdminDoLogin = actionCreator(ADMIN_DO_LOGIN, 'loginData');
export const actionGetEmail = actionCreator(GET_EMAIL, 'token');
export const actionSaveUser = actionCreator(SAVE_USER, 'user');
export const actionUpdateForm = actionCreator(UPDATE_FORM, 'form');
export const actionResetPasswordByEmail = actionCreator(RESET_PASS_BY_EMAIL, 'data');
export const actionGetNewPassEmail = actionCreator(GET_NEW_PASS_EMAIL, 'token');
export const actionSetNewPassword = actionCreator(SAVE_NEW_PASSWORD, 'newPassData');
export const actionUpdateNewPassForm = actionCreator(UPDATE_NEW_PASS_FORM_DATA, 'key,', 'value');
export const actionSetInvited = actionCreator(SET_INVITED, 'invited');
export const actionSetLoginError = actionCreator(ADMIN_SET_LOGIN_ERROR, 'loginError');
export const actionSetLoginStatus = actionCreator(SET_LOGIN_STATUS, 'loginData');
export const actionGetInvites = actionCreator(GET_INVITED);
export const actionSetAdmins = actionCreator(SET_ADMINS, 'admins');
export const actionGetAdmins = actionCreator(GET_ADMINS);
export const actionInviteAdmin = actionCreator(INVITE_ADMIN, 'email');
export const actionRemoveInvited = actionCreator(REMOVE_INVITED, 'adminId');
export const actionRemoveAdmin = actionCreator(REMOVE_USER, 'adminId');
export const actionResendInvite = actionCreator(RESEND_INVITE, 'id');

export const actionUpdateDraft = actionCreator(ADMIN_UPDATE_DRAFT, 'data', 'dirtyDraft');
export const actionSaveNew = actionCreator(CREATE, 'entity', 'payload');
export const actionSaveEdit = actionCreator(UPDATE, 'payload');
export const actionPrepNewDraft = actionCreator(ADMIN_PREP_NEW_DRAFT, 'entity');
export const actionRequestSpecific = actionCreator(SPECIFIC,' origin', 'payload', 'isAdmin');
export const actionSetDirtyDraftState = actionCreator(ADMIN_SET_DIRTY_DRAFT, 'dirtyDraftState');

