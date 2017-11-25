// if (process.env.NODE_ENV !== 'development' || process.env.PLATFORM_ENV !== 'web') {
//   module.exports = require('./configureStore.prod');
// } else {
//   module.exports = require('./configureStore.dev');
// }

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import defaultStore from './defaultStore';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a store that has redux-thunk middleware enabled
const store = createStore(
  reducers,
  defaultStore,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store
