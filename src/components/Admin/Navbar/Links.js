import routes from "../../../routes";
import * as ViewsConstants from '../../../constants/viewsConstants';
import * as EntitiesRoutes from '../../../constants/entitiesConstants';

const converter = (obj) => Object.keys(obj).reduce((acc, curr) => ({ ...acc, [curr]: curr }), {});

const { HOME, ABOUT, EVENTS, MEMBER, PLANING } = converter(ViewsConstants);
const { BOARD, SLIDES, NEWS, BENEFITS, GOALS, STATUES, INTRO, INSURANCE_STAFF, INSPECTIONS_STAFF, INSURANCE_HOW_TO,
  OFFICIALS, CONTACT } = converter(EntitiesRoutes);

export default {
  [ViewsConstants.HOME]: {
    key: ViewsConstants.HOME,
    label: 'Home',
    path: routes[HOME],
    children: [
      { path: SLIDES, label: EntitiesRoutes.SLIDES },
      { path: INTRO, label: EntitiesRoutes.INTRO },
      { path: NEWS, label: EntitiesRoutes.NEWS }
    ],
  },
  [ViewsConstants.MEMBER]: {
    key: ViewsConstants.MEMBER,
    label: 'Member',
    path: routes[MEMBER],
    children: [
      { path: BENEFITS, label: EntitiesRoutes.BENEFITS },
      { path: INSURANCE_STAFF, label: EntitiesRoutes.INSURANCE_STAFF },
      { path: INSPECTIONS_STAFF, label: EntitiesRoutes.INSPECTIONS_STAFF },
      { path: INSURANCE_HOW_TO, label: EntitiesRoutes.INSURANCE_HOW_TO }
    ]
  },
  [ViewsConstants.ABOUT]: {
    key: ViewsConstants.ABOUT,
    label: 'About',
    path: routes[ABOUT],
    children: [
      { path: GOALS, label: EntitiesRoutes.GOALS },
      { path: STATUES, label: EntitiesRoutes.STATUES },
      { path: BOARD, label: EntitiesRoutes.BOARD },
      { path: OFFICIALS, label: EntitiesRoutes.OFFICIALS },
      { path: CONTACT,label: EntitiesRoutes.CONTACT }
      // { path: 'USERS', label: USERS },
    ],
  },
  [ViewsConstants.PLANING]: {
    key: ViewsConstants.PLANING,
    label: 'Planing',
    path: routes[PLANING],
    children: [
      { path: EVENTS, label: EVENTS }
    ],
  },
  [ViewsConstants.EVENTS]: {
    key: ViewsConstants.EVENTS,
    label: 'Events',
    path: routes[EVENTS],
    children: [],
  },
};
