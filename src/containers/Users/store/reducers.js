import { createReducer } from 'redux-act'
import merge from 'ramda/src/merge'

import { setBiopics, setTotalCount, setPage, setError, updateBiopic, setLoading } from './actions'

import mergeProp from '../../../helpers/mergeProp'
import updateUsers from '../../../helpers/updateUsers'

export default createReducer({
    [setBiopics]: mergeProp('biopics'),
    [setTotalCount]: mergeProp('totalCount'),
    [setPage]: mergeProp('currentPage'),
    [setError]: mergeProp('errorMessage'),
    [updateBiopic]: (state, biopic) => merge(state, { biopics: updateUsers(biopic.id, state.biopics, biopic) }),
    [setLoading]: mergeProp('loading'),
  },
  { biopics: [], totalCount: 0, perPage: 50, currentPage: 1, loading: false }
)
