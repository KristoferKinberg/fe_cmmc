/**
 * Selects an entity from the state
 * @param state
 * @param entity
 * @returns {*}
 */
export const selectEntity = (state, entity) => state.entities[entity];
