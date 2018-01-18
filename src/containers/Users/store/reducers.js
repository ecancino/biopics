import { createReducer } from 'redux-act'
import merge from 'ramda/src/merge'

import { setUsers, setTotalCount, setPage, setError, updateUser } from './actions'

import mergeProp from '../helpers/mergeProp'
import updateUsers from '../helpers/updateUsers'

export default createReducer({
    [setUsers]: mergeProp('users'),
    [setTotalCount]: mergeProp('totalCount'),
    [setPage]: mergeProp('currentPage'),
    [setError]: mergeProp('errorMessage'),
    [updateUser]: (state, user) => merge(state, { users: updateUsers(user.id, state.users, user) })
  },
  { users: [], totalCount: 0, perPage: 50, currentPage: 1 }
)
