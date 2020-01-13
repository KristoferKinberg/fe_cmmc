import { takeEvery, call, put, all } from 'redux-saga/effects';
import {createDataFetchActions, GET_VIEW_DATA} from "./viewActions";
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

    console.log(entitiesActions, 's');

    yield all(Object.keys(data).map(key => put(entitiesActions[key][SUCCESS](data[key]))));
    yield put({ type: `DATA_FOR_VIEW_${view}_FETCHED`});

  } catch (error) {
    yield put({ type: `DATA_FOR_VIEW_${view}_FAILED`});
    console.log(error);
  }
};
