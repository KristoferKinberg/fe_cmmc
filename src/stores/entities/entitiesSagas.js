import {takeEvery, put, select, call} from "redux-saga/effects";
import {actionUpdateEntity, REQUEST_REMOVE_ENTITY, SET_ENTITY, UPDATE_ENTITY} from "./entitiesActions";
import _ from "lodash";
import {selectEntity} from "./entitesSelectors";
import { updateEntityActions } from './entitiesActions'
import {makeDeleteRequest} from "../request/requestSaga";

/**
 * Watch update entity
 * @returns {IterableIterator<*>}
 */


export const watchSetEntity = function* () {
  yield takeEvery(
    SET_ENTITY,
    makeSetEntity
  );
};
/**
 * Make update entity
 * @param email
 * @returns {IterableIterator<*>}
 */
const makeSetEntity = function* ({ entity, data }) {
  const entityData = yield select(selectEntity, entity);

  if (Array.isArray(entityData)) console.log('Array');
  if (_.isPlainObject(entityData)) console.log('Object');

  yield put({type: updateEntityActions[entity.toUpperCase()]})
};


// export const watchUpdateEntity = function* () {
  // yield takeEvery(
  //   UPDATE_ENTITY,
  //   makeUpdateEntity
  // );
// };
/**
 * Make update entity
 * @param email
 * @returns {IterableIterator<*>}
 */
const makeUpdateEntity = function* ({ entity, data }) {
  const entityData = yield select(selectEntity, entity);

  if (Array.isArray(entityData)) console.log('Array');
  if (_.isPlainObject(entityData)) console.log('Object');

  yield put({type: updateEntityActions[entity.toUpperCase()]})
};


/**
 * Watch update entity
 * @returns {IterableIterator<*>}
 */

export const watchRemoveEntity = function* () {
  yield takeEvery(
    REQUEST_REMOVE_ENTITY,
    makeRemoveEntity
  );
};
/**
 * Make update entity
 * @param email
 * @returns {IterableIterator<*>}
 */
const makeRemoveEntity = function* ({ entity, id }) {
  const res = yield call(makeDeleteRequest, `${entity}/${id}`);
  const { [id]: removedEntity, ...rest} = yield select(selectEntity, entity);

  yield put(actionUpdateEntity(entity, rest));
};

