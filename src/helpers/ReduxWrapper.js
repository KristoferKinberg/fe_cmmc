import React from 'react'
import { Provider } from 'react-redux'
import initializeStore from "../initializeStore";

const { store } = initializeStore();

const ProviderWrapper = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
);

export default ProviderWrapper;
