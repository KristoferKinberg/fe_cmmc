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
import UseGetViewData from "../effects/useGetViewData";
import {MEMBER} from "../constants/viewsConstants";
import React from "react";

const viewGenerator = (view) => () => {
  UseGetViewData({ view });
  // const data = UseGetEntities([ SLIDES, NEWS, INTRO ]);
  // console.log(data);
  return <h1>{view.toUpperCase()}</h1>;
};



const ComponentOverview = () => Object.values(EntitiesRoutes).reduce((acc, curr) => ({ ...acc, [curr]: viewGenerator(curr) }), {});


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
  ...ComponentOverview()
}
