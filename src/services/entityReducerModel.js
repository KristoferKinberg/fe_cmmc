import {createRequestActions} from "../stores/views/viewActions";
import {SUCCESS, UPDATE} from "../constants/constants";
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

  console.log(actions[SUCCESS])

  return mergeReducers({}, {
    [actions[SUCCESS]]: (state, action) => {
      return Array.isArray(action.data)
        ? { ...state, ...reduceDataToId(action.data) }
        : { ...state, ...action.data };
    },
    [`${UPDATE}_${name.toUpperCase()}`]: (state, { data }) => data,
    ...reducers
  });
}
