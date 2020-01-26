import { NOT_FOUND } from 'redux-first-router';
import * as routeConstants from "../../constants/viewsConstants";
import * as EntitiesRoutes from '../../constants/entitiesConstants';

const { BOARD, INTRO, INSURANCE_STAFF, INSPECTIONS_STAFF, INSURANCE_HOW_TO, OFFICIALS, CONTACT } = Object.keys(EntitiesRoutes);

/**
 * Converts a constant to a view name
 * @param name
 * @returns {string}
 */
const generateComponentName = name => {
  // console.log(name);

  return name.split('_').reduce((acc, curr) =>
    `${acc}${curr.substring(0, 1)}${curr.substring(1, curr.length)}`, '');
}

/**
 * Generate a object with keys as view constants and values as view names
 * @param routes
 * @returns {*}
 */
const generateRoutes = routes => routes.reduce((acc, curr) => {
  return {
    ...acc,
    // [curr]: generateComponentName(curr)
    [curr]: routeConstants[curr]
  }
}, {});

const generateSpecificRoutes = routes => routes.reduce((acc, curr) => {
  // console.log(curr);

  return {
    ...acc,
    [`${curr}_SPECIFIC`]: `${EntitiesRoutes[curr]}Specific`
    // [`${curr}_SPECIFIC`]: `${generateComponentName(curr)}Specific`
  }
}, {});

const components = {
  ...generateRoutes(Object.keys(routeConstants)),
  ...generateSpecificRoutes(Object.keys(EntitiesRoutes)),
  ...EntitiesRoutes
};

const componentsOverride = {
  ...components,
  [BOARD]: `${generateComponentName(EntitiesRoutes.BOARD)}Specific`,
  [INTRO]: `${generateComponentName(EntitiesRoutes.INTRO)}Specific`,
  [INSURANCE_STAFF]: `${generateComponentName(EntitiesRoutes.INSURANCE_STAFF)}Specific`,
  [INSPECTIONS_STAFF]: `${generateComponentName(EntitiesRoutes.INSPECTIONS_STAFF)}Specific`,
  [INSURANCE_HOW_TO]: `${generateComponentName(EntitiesRoutes.INSURANCE_HOW_TO)}Specific`,
  [OFFICIALS]: `${generateComponentName(EntitiesRoutes.OFFICIALS)}Specific`,
  [CONTACT]: `${generateComponentName(EntitiesRoutes.CONTACT)}Specific`,
};

console.log('components', componentsOverride)

export default (state = componentsOverride['HOME'], action = {}) => {
  return componentsOverride[action.type] || state;
}
