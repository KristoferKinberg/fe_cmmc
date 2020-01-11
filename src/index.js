import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/rootReducer";
import {rootSaga} from "./store/rootSaga";
import ReduxToastr from 'react-redux-toastr'

const init = async() => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      rootReducer(),
      compose(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    ReactDOM.render(
      <Provider store={store}>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          getState={(state) => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        <App />
      </Provider>,
      document.getElementById('root'));
};

init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
