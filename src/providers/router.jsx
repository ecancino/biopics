import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../store'
import App from '../containers/App/App'
import Home from '../containers/Home/Home'
import Users from '../containers/Users/Users'
import User from '../containers/User/User'

const history = syncHistoryWithStore(hashHistory, store)

export default () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/user/:userId" component={User}/>
    </Route>
  </Router>
)
