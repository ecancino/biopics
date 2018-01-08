import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import users from '../containers/Users/reducers'
import user from '../containers/User/reducers'

export default combineReducers({
  users,
  user,
  routing: routerReducer
});
