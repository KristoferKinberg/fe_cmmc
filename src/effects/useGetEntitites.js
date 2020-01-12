import {useSelector} from "react-redux";
import React from "react";
import {selectEntity} from "../selectors";

/**
 * Selects the entities from the state and returns them to a view
 * @param entities
 * @returns {{}|{[p: string]: *}}
 */
export default (entities = []) => entities
  .map(entity => entity.toLowerCase())
  .reduce((acc, curr) => ({ ...acc, [curr]: useSelector(selectEntity(curr)) }), {});

