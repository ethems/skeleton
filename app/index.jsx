import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store= createStoreWithMiddleware(reducers);

var HelloMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Napiyoruz ?</h1>
      </div>
    );
  }
});


require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!./styles/app.scss');
$(document).foundation();



ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={HelloMessage}>
        </Route>
      </Router>
</Provider>,document.getElementById('app'));
