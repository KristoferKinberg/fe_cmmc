import React from 'react';
import { useSelector } from 'react-redux';
import views from './views';
import {selectRoutePage, selectRoutesMap, selectRouteType} from "./selectors";
import AdminWrapper from "./components/Admin/AdminWrapper";
import './App.css';

const App = () => {
  const routesMap = useSelector(selectRoutesMap);
  const type = useSelector(selectRouteType);
  const page = useSelector(selectRoutePage);
  const Component = views[page];

  console.log(type);
  console.log(views);
  console.log(page);
  console.log(Component);

  /**
   * Returns boolean if view is admin or not
   * @returns {boolean}
   */
  const isAdminView = () => routesMap[type].isAdmin;

  /**
   * Wraps admin views
   * @returns {*}
   */
  const wrapAdmin = () => <AdminWrapper>
    <Component />
  </AdminWrapper>;

  /**
   * Wraps normal views
   * @returns {*}
   */
  const wrapNormal = () => <div>
    <Component />
  </div>;

  return isAdminView()
    ? wrapAdmin()
    : wrapNormal();
};

export default App;
