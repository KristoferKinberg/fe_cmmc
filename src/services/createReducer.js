/**
 * Merges several reducers together
 * @param initialState
 * @param reducerModels
 * @returns {Function}
 */
const mergeReducers = (initialState, ...reducerModels) => createReducer(initialState, reducerModels.reduce((acc, curr) => ({ ...acc, ...curr }), {}));

/**
 * Creates a reducer
 * @param initialState
 * @param handlers
 * @returns {Function}
 */
export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
};

export default mergeReducers;
