import compose from 'ramda/src/compose'
import prop from 'ramda/src/prop'

import request from '../../../helpers/request'
import { setResults, setLoading } from './actions'

const fromEvent = (e) => e.target.value.length > 3 ? e.target.value : null

const findBiopics = q => request.get(`/biopics?q=${q}`).then(prop('data'))

export const findUsers = value => dispatch => {
  const toggleLoading = compose(dispatch, setLoading)
  const updateResults = compose(dispatch, setResults)
  toggleLoading(true)
  updateResults([])
  const term = fromEvent(value)
  if (term === null) return
  findBiopics(term)
    .then(updateResults)
    .then(() => toggleLoading(false))
}
