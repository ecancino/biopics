import compose from 'ramda/src/compose'
import path from 'ramda/src/path'

import validInput from '../../../helpers/validInput'
import { history } from '../../../providers/router'
import { setBiopics, setTotalCount, setPage, setError, updateBiopic, setLoading } from './actions'
import { getBiopics, findBiopics, patchBiopic, deleteBiopic } from '../../../store/thunks'

export const requestBiopics = (page = 1) => dispatch =>
  getBiopics(page)
    .then(({ biopics, totalCount }) => {
      history.replace(`/biopics/${page}`)
      compose(dispatch, setError)(path(['length'], biopics) ? undefined : 'No biopics')
      compose(dispatch, setPage)(page)
      compose(dispatch, setBiopics)(biopics)
      compose(dispatch, setTotalCount)(totalCount)
    })

export const changeBiopic = biopic => dispatch =>
  patchBiopic(biopic)
    .then(() => compose(dispatch, updateBiopic)(biopic))

export const removeBiopic = (biopicId, currentPage) => dispatch =>
  deleteBiopic(biopicId)
    .then(() => compose(dispatch, requestBiopics)(currentPage))

export const searchBiopics = value => dispatch => {
  const toggleLoading = compose(dispatch, setLoading)
  const updateResults = compose(dispatch, setBiopics)
  updateResults([])
  const term = validInput(value)
  if (term === null) return
  toggleLoading(true)
  findBiopics(term)
    .then(updateResults)
    .then(() => toggleLoading(false))
}
