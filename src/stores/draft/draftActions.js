import actionCreator from "../../services/actionCreator";

export const SET_DRAFT = 'SET_DRAFT';
export const CLEAR_DRAFT = 'CLEAR_DRAFT';
export const DIRTY_DRAFT = 'DIRTY_DRAFT';
export const UPDATE_DRAFT = 'UPDATE_DRAFT';

export const actionSetDraft = actionCreator(SET_DRAFT, 'data');
export const actionClearDraft = actionCreator(CLEAR_DRAFT);
export const actionSetDirtyDraft = actionCreator(DIRTY_DRAFT);
export const actionUpdateDraft = actionCreator(UPDATE_DRAFT, 'key', 'value');
