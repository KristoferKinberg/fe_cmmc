/**
 * Selects an entity from the entities-part of the state
 * @param state
 * @param entity
 * @returns {*}
 */
export const selectEntity = entity => state => state.entities[entity];
