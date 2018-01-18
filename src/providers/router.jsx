import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../store'
import App from '../containers/App/App'
import Home from '../containers/Home/Home'
import Biopics from '../containers/Biopics/Biopics'
import Biopic from '../containers/Biopic/Biopic'
import Search from '../containers/Search/Search'

export const history = syncHistoryWithStore(hashHistory, store)

export default () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/biopics(/:page)" component={Biopics} />
      <Route path="/biopic/:biopicId" component={Biopic}/>
      <Route path="/search" component={Search}/>
    </Route>
  </Router>
)
