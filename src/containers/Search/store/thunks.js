import compose from 'ramda/src/compose'

import { setResults, setLoading } from './actions'
import { findBiopics } from '../../../store/thunks'
import validInput from '../../../helpers/validInput'

export const findUsers = value => dispatch => {
  const toggleLoading = compose(dispatch, setLoading)
  const updateResults = compose(dispatch, setResults)
  toggleLoading(true)
  updateResults([])
  const term = validInput(value)
  if (term === null) return
  findBiopics(term)
    .then(updateResults)
    .then(() => toggleLoading(false))
}
