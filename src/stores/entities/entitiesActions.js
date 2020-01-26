import actionCreator from "../../services/actionCreator";
import * as entityConstants from '../../constants/entitiesConstants';


export const updateEntityActions = Object.keys(entityConstants).reduce((acc, curr) => ({ ...acc, [curr]: `UPDATE_${curr}` }), {});

export const SET_ENTITY = 'SET_ENTITY';
export const UPDATE_ENTITY = 'UPDATE_ENTITY';
export const REQUEST_REMOVE_ENTITY = 'REQUEST_REMOVE_ENTITY';
export const REQUEST_GET_ENTITY = 'REQUEST_GET_ENTITY';

export const actionUpdateEntity = (entity, data) => ({ type: `UPDATE_${entity.toUpperCase()}`, data });
// export const actionUpdateEntity = actionCreator(UPDATE_ENTITY, 'entity', 'data');

export const actionSetEntity = actionCreator(SET_ENTITY, 'entity', 'data');
export const actionRequestRemoveEntity = actionCreator(REQUEST_REMOVE_ENTITY, 'entity', 'id');
export const actionRequestGetEntity = actionCreator(REQUEST_GET_ENTITY, 'entity', 'id');
