import {connectRoutes} from "redux-first-router";
import {applyMiddleware, compose, createStore } from "redux";
import Routes from './routes';
import createSagaMiddleware from "redux-saga";
import RootReducer from "./stores/root/rootReducer";
import {rootSaga} from "./stores/root/rootSaga";
export default (preloadedState) => {
  const { reducer, middleware, enhancer } = connectRoutes(Routes);

  const sagaMiddleware = createSagaMiddleware();
  const middleWares = applyMiddleware(middleware, sagaMiddleware);
  const enhancers = compose(enhancer, middleWares, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  const store = createStore(RootReducer({}, reducer), preloadedState, enhancers);

  sagaMiddleware.run(rootSaga);

  return { store };
}
