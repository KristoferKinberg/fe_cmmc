import React from 'react';
import { useSelector } from 'react-redux';
import views from './views';

import './App.css';

const App = () => {
  const page = useSelector(({ page }) => page);

  console.log(page);

  const Component = views[page];
  return <Component />;
};

export default App;
