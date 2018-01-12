import { createReducer } from 'redux-act'
import merge from 'ramda/src/merge'
import { setUsers, setTotalCount } from './actions'

export default createReducer({
    [setUsers]: (state, users) => merge(state, { users }),
    [setTotalCount]: (state, totalCount) => merge(state, { totalCount }),
  },
  { users: [], totalCount: 0, perPage: 10 }
)
