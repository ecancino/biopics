import { createReducer } from 'redux-act'

import { setUser, loadUser } from './actions'

export default createReducer({
  [setUser]: (state, user) => user,
  [loadUser]: (state) => state
}, {})
