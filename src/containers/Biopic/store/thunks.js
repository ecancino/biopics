import compose from 'ramda/src/compose'
import always from 'ramda/src/always'
import path from 'ramda/src/path'

import { dispatch } from '../../../store'
import { history } from '../../../providers/router'
import { setBiopic, setCountries, setTypes } from './actions'
import { getBiopicData, patchBiopic, postBiopic } from '../../../store/thunks'

const toBiopics = () => history.push('/biopics')
const emptyBiopic = () => setBiopic({})

export const updateBiopic = biopic => dispatch => patchBiopic(biopic)
  .then(compose(dispatch, emptyBiopic))
  .then(toBiopics)

export const createBiopic = biopic => dispatch => postBiopic(biopic)
  .then(compose(dispatch, emptyBiopic))
  .then(toBiopics)

export const getBiopic = id => dispatch => {
  compose(dispatch, setBiopic)({})
  getBiopicData(id)
    .then(([ biopic, countries, types]) => {
      compose(dispatch, setBiopic)(biopic)
      compose(dispatch, setCountries)(countries)
      compose(dispatch, setTypes)(types)
    })
}

export const getBiopicId = compose(dispatch, getBiopic, path(['params', 'biopicId']))
export const getBiopicNew = compose(dispatch, getBiopic, always(0))
