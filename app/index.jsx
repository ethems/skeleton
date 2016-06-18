import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app'



require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!./styles/app.scss');
require('style!css!sass!./styles/left-panel.scss')







const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store= createStoreWithMiddleware(reducers);





$(document).foundation();



ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
</Provider>,document.getElementById('app'));
