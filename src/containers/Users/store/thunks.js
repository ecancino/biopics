import compose from 'ramda/src/compose'
import path from 'ramda/src/path'

import validInput from '../../../helpers/validInput'
import { history } from '../../../providers/router'
import { setBiopics, setTotalCount, setPage, setError, updateBiopic, setLoading } from './actions'
import { getBiopics, findBiopics, patchBiopic, deleteBiopic } from '../../../store/thunks'

export const requestBiopics = (page = 1) => dispatch =>
  getBiopics(page)
    .then(({ users, totalCount }) => {
      history.replace(`/biopics/${page}`)
      compose(dispatch, setError)(path(['length'], users) ? undefined : 'No users')
      compose(dispatch, setPage)(page)
      compose(dispatch, setBiopics)(users)
      compose(dispatch, setTotalCount)(totalCount)
    })

export const changeBiopic = user => dispatch =>
  patchBiopic(user)
    .then(() => compose(dispatch, updateBiopic)(user))

export const removeBiopic = (userId, currentPage) => dispatch =>
  deleteBiopic(userId)
    .then(() => compose(dispatch, requestBiopics)(currentPage))

export const searchBiopics = value => dispatch => {
  const toggleLoading = compose(dispatch, setLoading)
  const updateResults = compose(dispatch, setBiopics)
  toggleLoading(true)
  updateResults([])
  const term = validInput(value)
  if (term === null) return
  findBiopics(term)
    .then(updateResults)
    .then(() => toggleLoading(false))
}
