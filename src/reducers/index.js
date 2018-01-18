import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import biopics from '../containers/Biopics/store/reducers'
import biopic from '../containers/Biopic/store/reducers'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  biopics,
  biopic,
});
