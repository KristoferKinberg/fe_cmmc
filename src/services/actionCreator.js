/**
 * Makes action creators
 * @param type
 * @param argNames
 * @returns {function(...[*]): *}
 */
export default (type, ...argNames) => (...args) => argNames
  .reduce((acc, curr, index) => ({ ...acc, [curr]: args[index] }), { type });
