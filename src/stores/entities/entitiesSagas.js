import {takeEvery, put, call, select} from "redux-saga/effects";
import {UPDATE_ENTITY} from "./entitiesActions";
import _ from "lodash";
import {selectEntity} from "./entitesSelectors";
import { updateEntityActions } from './entitiesActions'

/**
 * Watch update entity
 * @returns {IterableIterator<*>}
 */

export const watchUpdateEntity = function* () {
  yield takeEvery(
    UPDATE_ENTITY,
    makeUpdateEntity
  );
}
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
