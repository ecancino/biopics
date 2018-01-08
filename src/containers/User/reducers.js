import { createReducer } from 'redux-act'

import { setUser } from './actions'

export default createReducer({
  [setUser]: (state, user) => user
}, { user: null })
