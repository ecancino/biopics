import { createReducer } from 'redux-act'
import merge from 'ramda/src/merge'

import { setUser, setCountries, setTypes } from './actions'

export default createReducer({
  [setUser]: (state, user) => merge(state, { user }),
  [setCountries]: (state, countries) => merge(state, { countries }),
  [setTypes]: (state, types) => merge(state, { types }),
}, { user: {}, countries: [], types: [] })
