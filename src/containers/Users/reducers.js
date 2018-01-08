import { createReducer } from 'redux-act'
import { setUsers } from './actions'

export default createReducer({
    [setUsers]: (state, users) => users,
  },
  { users: [] }
)
