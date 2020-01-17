import initialState from "../root/initialState";
import {createReducer} from "../../services/createReducer";
import {SET_ADMINS, SET_INVITED} from "./adminActions";

export default createReducer(initialState['admin'], {
  [SET_ADMINS]: (state, { admins }) => ({ ...state, admins }),
  [SET_INVITED]: (state, { invited }) => ({ ...state, invited }),
});
