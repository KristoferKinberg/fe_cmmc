/**
 * Selects an entity from the entities-part of the state
 * @param state
 * @param entity
 * @returns {*}
 */
export const selectEntity = entity => state => state.entities[entity];

/**
 * Selects location part of state
 * @param state
 * @returns {*}
 */
export const selectLocation = state => state.location;

/**
 * Selects the current views param id in URL
 * @param state
 * @returns {*}
 */
export const selectParamId = state => state.location.payload.id;

/**
 * Selects the draft part of the state
 * @param state
 * @returns {default.draft|{data, dirtyDraft}|Function}
 */
export const selectDraftPart = state => state.draft;

/**
 * Selects routes map
 * @param state
 * @returns {RoutesMap|routesMap|{[p: string]: Route}}
 */
export const selectRoutesMap = state => state.location.routesMap;

/**
 * Selects route type
 * @param state
 * @returns {*}
 */
export const selectRouteType = state => state.location.type;

/**
 * Selects route page
 * @param state
 * @returns {Function|"manager"|"preview"}
 */
export const selectRoutePage = state => state.page;
