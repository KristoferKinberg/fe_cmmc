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
import ComponentOverviewComps  from '../views/admin/Overview';
import ComponentSpecificComps  from '../views/admin/Spefific';

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
  ...ComponentOverviewComps,
  ...ComponentSpecificComps
}
