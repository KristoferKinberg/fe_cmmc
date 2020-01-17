import * as EntitiesRoutes from './constants/entitiesConstants';

const generateEntitiesRoutes = () => Object.keys(EntitiesRoutes).reduce((acc, curr) => ({ ...acc, [curr]: `/admin/${EntitiesRoutes[curr]}` }), {});

export default {
  HOME: '/',
  MEMBER: '/member/',
  ABOUT: '/about',
  PLANING: '/planing',
  EVENTS: '/events',
  LOG_IN: '/admin/login',
  REGISTER_ADMIN: '/admin/register',
  RESET_ADMIN_PASSWORD: '/admin/reset-password',
  SET_NEW_ADMIN_PASSWORD: '/admin/set-new-password',
  ADMIN_HOME: '/admin/home',

  ...generateEntitiesRoutes(),
};
