import * as EntitiesRoutes from './constants/entitiesConstants';

const { INTRO, INSURANCE_STAFF, ...rest } = EntitiesRoutes;

/**
 * Generates overview admin routes
 * @returns {{}}
 */
const generateEntitiesRoutes = () => Object.keys(rest).reduce((acc, curr) => ({ ...acc, [curr]: {
    path: `/admin/${EntitiesRoutes[curr]}`,
    isAdmin: true,
  }
}), {});

/**
 * Generates specific admin routes
 * @returns {{}|{[p: string]: string}}
 */
const generateEntitiesRoutesSpecific = () => Object.keys(EntitiesRoutes).reduce((acc, curr) => ({ ...acc, [`${curr}_SPECIFIC`]: {
    path: `/admin/${EntitiesRoutes[curr]}/:id`,
    isAdmin: true,
  }
}), {});

console.log({
  ...generateEntitiesRoutes(),
  ...generateEntitiesRoutesSpecific(),
});

export default {
  HOME: {
    path: '/',
    isAdmin: false,
  },
  MEMBER: {
    path: '/member/',
    isAdmin: false,
  },
  ABOUT: {
    path: '/about',
    isAdmin: false,
  },
  PLANING: {
    path: '/planing',
    isAdmin: false,
  },
  EVENTS: {
    path: '/events',
    isAdmin: false,
  },
  LOG_IN: {
    path: '/admin/login',
    isAdmin: false,
  },
  REGISTER_ADMIN: {
    path: '/admin/register',
    isAdmin: false,
  },
  RESET_ADMIN_PASSWORD: {
    path: '/admin/reset-password',
    isAdmin: false,
  },
  SET_NEW_ADMIN_PASSWORD: {
    path: '/admin/set-new-password',
    isAdmin: false,
  },
  ADMIN_HOME: {
    path: '/admin/home',
    isAdmin: true,
  },

  ...generateEntitiesRoutes(),
  ...generateEntitiesRoutesSpecific(),
};
