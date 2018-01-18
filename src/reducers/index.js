import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import users from '../containers/Users/store/reducers'
import user from '../containers/User/store/reducers'
import search from '../containers/Search/store/reducers'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  users,
  user,
  search,
});
