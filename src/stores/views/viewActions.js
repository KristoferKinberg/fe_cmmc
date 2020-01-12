import actionCreator from "../../services/actionCreator";
import * as viewConstants from "../../views/viewsConstants";
import {FAILURE, REQUEST, SUCCESS} from "../../constants";

export const GET_VIEW_DATA = 'GET_VIEW_DATA';
export const RESOLVE_FETCHED_VIEW_DATA = 'RESOLVE_FETCHED_VIEW_DATA';

export const createDataFetchActions = object => Object
  .keys(object)
  .reduce((acc, curr) => ({ ...acc, [curr]: fetchStateObject(curr)}), {});

export const fetchStateObject = key => {
  const actions = createRequestActions(key)

  return {
    [REQUEST]: actionCreator(actions[REQUEST]),
    [SUCCESS]: actionCreator(actions[SUCCESS], 'data'),
    [FAILURE]: actionCreator(actions[FAILURE], 'error'),
  };
};

export const createRequestActions = key => {
  console.log(key)
  return {
    [REQUEST]: `REQUEST_${key.toUpperCase()}_DATA`,
    [SUCCESS]: `RESOLVE_FETCHED_${key.toUpperCase()}_DATA`,
    [FAILURE]: `FAILED_TO_FETCH_${key.toUpperCase()}_DATA`,
  }
};

export const actionGetViewData = actionCreator(GET_VIEW_DATA, 'view');
