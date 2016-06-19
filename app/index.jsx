import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


import App from './components/app';
import store from './store';
import style from './styles';

$(document).foundation();


const posts=()=>  <div>posts</div>;

const messages=()=>  <div>messages</div>;

const discussions=()=>   <div>discussion</div>;

const statistics=()=> <div>statistics</div>;



ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={posts} />
          <Route path="messages" component={messages} />
          <Route path="discussions" component={discussions} />
          <Route path="statistics" component={statistics} />
        </Route>
      </Router>
</Provider>,document.getElementById('app'));
