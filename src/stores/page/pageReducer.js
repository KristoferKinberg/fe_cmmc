import { NOT_FOUND } from 'redux-first-router';

const components = {
  HOME: 'Home',
  MEMBER: 'Member',
  ABOUT: 'About',
  PLANING: 'Planing',
  EVENTS: 'Events',
  [NOT_FOUND]: 'NotFound'
};

export default (state = 'HOME', action = {}) => components[action.type] || state;
