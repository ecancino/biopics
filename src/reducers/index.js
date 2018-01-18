import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import biopics from '../containers/Users/store/reducers'
import biopic from '../containers/User/store/reducers'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  biopics,
  biopic,
});
