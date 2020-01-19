import { takeEvery, call, put, all } from 'redux-saga/effects';
import {createDataFetchActions, fetchStateObject, GET_VIEW_DATA, GET_ENTITY_DATA} from "./viewActions";
import {makeGetRequest} from "../request/requestSaga";
import {REQUEST, SUCCESS} from "../../constants/constants";

export const watchGetViewData = function* () {
  yield takeEvery(
    GET_VIEW_DATA,
    makeGetViewData
  )
};
const makeGetViewData = function* ({ view }) {
  try {
    yield put({ type: `FETCHING_DATA_FOR_VIEW_${view}`});

    const { data } = yield call(makeGetRequest, view);
    const entitiesActions = createDataFetchActions(data);

    yield all(Object.keys(data).map(key => put(entitiesActions[key][SUCCESS](data[key]))));
    yield put({ type: `DATA_FOR_VIEW_${view}_FETCHED`});

  } catch (error) {
    yield put({ type: `DATA_FOR_VIEW_${view}_FAILED`});
    console.log(error);
  }
};


export const watchGetEntityData = function* () {
  yield takeEvery(
    GET_ENTITY_DATA,
    makeGetEntityData
  )
};
const makeGetEntityData = function* ({ entity }) {
  try {
    yield put({ type: `FETCHING_DATA_FOR_ENTITY_${entity.toUpperCase()}`});
    const { data } = yield call(makeGetRequest, entity);

    yield put(fetchStateObject(entity)[SUCCESS](data));
    yield put({ type: `DATA_FOR_ENTITY_${entity.toUpperCase()}_FETCHED`});
  } catch (error) {
    yield put({ type: `DATA_FOR_ENTITY_${entity.toUpperCase()}_FAILED`});
    console.log(error);
  }
};
