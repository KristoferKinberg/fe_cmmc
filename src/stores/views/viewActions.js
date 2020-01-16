import actionCreator from "../../services/actionCreator";
import * as viewConstants from "../../constants/viewsConstants";
import {FAILURE, REQUEST, SUCCESS} from "../../constants/constants";
import {captialToDash} from "../../helpers";

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
  // console.log('key: ', key)
  return {
    [REQUEST]: `REQUEST_${captialToDash(key)}_DATA`,
    [SUCCESS]: `RESOLVE_FETCHED_${captialToDash(key)}_DATA`,
    [FAILURE]: `FAILED_TO_FETCH_${captialToDash(key)}_DATA`,
  }
};

export const actionGetViewData = actionCreator(GET_VIEW_DATA, 'view');
