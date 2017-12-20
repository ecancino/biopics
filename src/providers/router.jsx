import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../store'
import App from '../containers/App/App'
import Home from '../containers/Home/Home'
import UserList from '../containers/Users/UserList'
import User from '../containers/Users/User'

const history = syncHistoryWithStore(hashHistory, store)

export default () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/users" component={UserList} />
      <Route path="/user/:userId" component={User}/>
    </Route>
  </Router>
)
