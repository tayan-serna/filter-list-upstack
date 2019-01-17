// @vendors
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line


const store = createStore(
  reducer,
  {
    posts: [],
    filteredPosts: [],
  },
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
