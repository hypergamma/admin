import { createStore, applyMiddleware, combineReducers } from 'redux';

import { router5Middleware, router5Reducer } from 'redux-router5';
import logger from 'redux-logger';
import breadcrumb from './reducers/breadcrumb';

export default function configureStore(router, initialState = {}) {
  const createStoreWithMiddleware = applyMiddleware(router5Middleware(router), logger())(createStore);
  const store = createStoreWithMiddleware(combineReducers({
    router: router5Reducer,
    breadcrumb
  }), initialState);

  window.store = store;
  return store;
}
