import { NOT_FOUND } from 'redux-first-router';

import * as routeConstants from "../../constants/viewsConstants";

/**
 * Converts a constant to a view name
 * @param name
 * @returns {string}
 */
const generateComponentName = name => name.split('_').reduce((acc, curr) => `${acc}${curr.substring(0, 1)}${curr.substring(1, curr.length).toLowerCase()}`, '');

/**
 * Generate a object with keys as view constants and values as view names
 * @param routes
 * @returns {*}
 */
const generateRoutes = routes => routes.reduce((acc, curr) => ({
  ...acc,
  [curr]: generateComponentName(curr)
}), {});

const components = generateRoutes(Object.keys(routeConstants))

export default (state = components[routeConstants.HOME], action = {}) => {
  return components[action.type] || state;
}
