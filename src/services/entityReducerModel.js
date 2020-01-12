import {createRequestActions} from "../stores/views/viewActions";
import {SUCCESS} from "../constants";
import mergeReducers from "./createReducer";
import {reduceDataToId} from "../helpers";

/**
 * Adds some default functionality to a entity reducers then merges it with other given reducers
 * @param name
 * @param reducers
 * @returns {Function}
 */
export default (name, ...reducers) => {
  const actions = createRequestActions(name);

  return mergeReducers({}, {
    [actions[SUCCESS]]: (state, action) => {
      return { ...state, ...reduceDataToId(action.data) }
    },
    ...reducers
  });
}
