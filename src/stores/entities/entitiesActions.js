import actionCreator from "../../services/actionCreator";
import * as entityConstants from '../../constants/entitiesConstants';


export const updateEntityActions = Object.keys(entityConstants).reduce((acc, curr) => ({ ...acc, [curr]: `UPDATE_${curr}` }), {});

export const UPDATE_ENTITY = 'UPDATE_ENTITY';

export const actionUpdateEntity = actionCreator(UPDATE_ENTITY, 'entity', 'data');

