import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import usersReducer from './users'
import userReducer from './user'

export default combineReducers({
  users: usersReducer,
  user: userReducer,
  routing: routerReducer
});
