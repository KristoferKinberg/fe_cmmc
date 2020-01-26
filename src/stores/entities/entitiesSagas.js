import {takeEvery, put, select, call} from "redux-saga/effects";
import {
  actionUpdateEntity,
  REQUEST_GET_ENTITY,
  REQUEST_REMOVE_ENTITY,
  SET_ENTITY,
  UPDATE_ENTITY
} from "./entitiesActions";
import _ from "lodash";
import { updateEntityActions } from './entitiesActions'
import {makeDeleteRequest, makeGetRequest} from "../request/requestSaga";
import {actionSetDraft} from "../draft/draftActions";
import {selectEntity} from "../../selectors";

/**
 * Watch update entity
 * @returns {IterableIterator<*>}
 */
// export const watchSetEntity = function* () {
//   yield takeEvery(
//     SET_ENTITY,
//     makeSetEntity
//   );
// };
/**
 * Make update entity
 * @param email
 * @returns {IterableIterator<*>}
 */
// const makeSetEntity = function* ({ entity, data }) {
//   const entityData = yield select(selectEntity, entity);
//
//   if (Array.isArray(entityData)) console.log('Array');
//   if (_.isPlainObject(entityData)) console.log('Object');
//
//   yield put({type: updateEntityActions[entity.toUpperCase()]})
// };

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
  const { [id]: removedEntity, ...rest } = yield select(selectEntity, entity);

  yield put(actionUpdateEntity(entity, rest));
};

export const watchGetEntity = function* () {
  yield takeEvery(
    REQUEST_GET_ENTITY,
    makeGetEntity
  )
};
export const makeGetEntity = function* ({ entity, id = '' }) {
  const url = id
    ? `${entity}/${id}`
    : entity;

  const { data: entityData } = yield call(makeGetRequest, url);

  if (id !== 'new') {
    const stateData = select(selectEntity(entity));
    yield put(actionUpdateEntity(entity, { ...stateData, [id]: entityData }))
  }

  yield put(actionSetDraft(entityData));
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
// const makeUpdateEntity = function* ({ entity, data }) {
//   const entityData = yield select(selectEntity, entity);
//
//   if (Array.isArray(entityData)) console.log('Array');
//   if (_.isPlainObject(entityData)) console.log('Object');
//
//   yield put({type: updateEntityActions[entity.toUpperCase()]})
// };
