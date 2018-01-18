import { createReducer } from 'redux-act'

import { setResults, setLoading } from './actions'

import mergeProp from '../../../helpers/mergeProp'

export default createReducer({
    [setResults]: mergeProp('results'),
    [setLoading]: mergeProp('loading'),
  },
  { results: [], loading: false }
)
