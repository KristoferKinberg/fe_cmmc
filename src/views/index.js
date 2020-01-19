import * as EntitiesRoutes from '../constants/entitiesConstants';

import Home from './Home';
import Member from './Member';
import About from "./About";
import Planing from './Planing';
import Events from './Events';
import LogIn from './forms/subViews/logIn';
import RegisterUser from './forms/subViews/registerUser';
import ResetPassword from './forms/subViews/resetPassword';
import SetNewPassword from './forms/subViews/setNewPassword';
import AdminHome from './admin/AdminHome';
import ComponentOverview from '../components/Admin/ComponentOverview';
import React from "react";
import {NEWS, BENEFITS, SLIDES, GOALS, STATUES, GALLERY_EVENTS} from "../constants/entitiesConstants";
import InputBlock from "../components/Admin/ComponentEdit/SidebarBlock/InputBlock/InputBlock";
import TextareaBlock from "../components/Admin/ComponentEdit/SidebarBlock/TextareaBlock/TextareaBlock";
import ComponentEdit from "../components/Admin/ComponentEdit/ComponentEdit";

const AnyComponent = (props) => {
  const propss = Object.values(props);
  const renderProps = () => propss.map((prop, index) => <p key={index}>{prop}</p>)

  return <div>
    { renderProps() }
  </div>;
};
const componentOverviewGenerator = ({ entity, component }) => () => <ComponentOverview entity={entity} title={entity} component={component} />;
const componentSpecificGenerator = ({ entity, component, handlers }) => () => {
  console.log(handlers);

  return <ComponentEdit entity={entity} component={component}>
    {handlers}
  </ComponentEdit>
};

console.log(EntitiesRoutes);

const overviewComponentRoutes = [
  { entity: NEWS, component: AnyComponent },
  { entity: BENEFITS, component: AnyComponent },
  { entity: SLIDES, component: AnyComponent },
  { entity: GOALS, component: AnyComponent },
  { entity: STATUES, component: AnyComponent },
  { entity: GALLERY_EVENTS, component: AnyComponent },
];

const specificComponentRoutes = [
  {
    entity: NEWS, component: AnyComponent, handlers: [
      <InputBlock title={'Bild-url'} responsibility={'imgUrl'}/>,
      <InputBlock title={'Titel'} responsibility={'title'}/>,
      <TextareaBlock title={'Titel'} responsibility={'title'}/>,
    ]
  }
];
const ComponentOverviewComps = () => overviewComponentRoutes.reduce((acc, curr) => ({ ...acc, [curr.entity]: componentOverviewGenerator(curr) }), {});
const ComponentSpecificComps = () => specificComponentRoutes.reduce((acc, curr) => ({ ...acc, [curr.entity]: componentSpecificGenerator(curr) }), {});

export default {
  Home,
  Member,
  About,
  Planing,
  Events,
  LogIn,
  RegisterUser,
  ResetPassword,
  SetNewPassword,
  AdminHome,
  ...ComponentOverviewComps(),
  ...ComponentSpecificComps()
}
