// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// @components
import App from './containers/App';

import store from './redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
