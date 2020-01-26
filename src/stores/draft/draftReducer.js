import initialState from "../root/initialState";
import {createReducer} from "../../services/createReducer";
import {CLEAR_DRAFT, DIRTY_DRAFT, SET_DRAFT, UPDATE_DRAFT} from "./draftActions";

export default createReducer(initialState['draft'], {
  [SET_DRAFT]: (state, { data }) => ({ ...state, data }),
  [CLEAR_DRAFT]: (state, action) => ({ ...state, data: null, dirtyDraft: false }),
  [DIRTY_DRAFT]: (state, action) => ({ ...state, data: null, dirtyDraft: true }),
  [UPDATE_DRAFT]: (state, { key, value }) => ({ ...state, data: { ...state.data, [key]: value }, dirtyDraft: true }),
})
