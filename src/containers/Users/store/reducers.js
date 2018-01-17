import { createReducer } from 'redux-act'
import merge from 'ramda/src/merge'
import { setUsers, setTotalCount, setPage } from './actions'

export default createReducer({
    [setUsers]: (state, users) => merge(state, { users }),
    [setTotalCount]: (state, totalCount) => merge(state, { totalCount }),
    [setPage]: (state, currentPage) => merge(state, { currentPage }),
  },
  { users: [], totalCount: 0, perPage: 50, currentPage: 1 }
)
