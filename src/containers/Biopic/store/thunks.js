import compose from 'ramda/src/compose'
import path from 'ramda/src/path'

import { dispatch } from '../../../store'
import { history } from '../../../providers/router'
import { setBiopic, setCountries, setTypes } from './actions'
import { getBiopicData, getDataTables, patchBiopic, postBiopic } from '../../../store/thunks'

export const updateBiopic = biopic => dispatch => patchBiopic(biopic)
  .then(compose(dispatch, () => setBiopic({})))
  .then(() => history.replace('/biopics'))

export const createBiopic = biopic => dispatch => postBiopic(biopic)
  .then(compose(dispatch, () => setBiopic({})))
  .then(() => history.replace('/biopics'))

export const getData = id => dispatch => getBiopicData(id)
  .then(([ biopic, countries, types]) => {
    compose(dispatch, setBiopic)(biopic)
    compose(dispatch, setCountries)(countries)
    compose(dispatch, setTypes)(types)
  })

export const getTables = () => dispatch => {
  compose(dispatch, setBiopic)({})
  getDataTables()
    .then(([ countries, types]) => {
      compose(dispatch, setCountries)(countries)
      compose(dispatch, setTypes)(types)
    })
}

export const getBiopicFromId = compose(dispatch, getData, path(['params', 'biopicId']))
export const getBiopicNew = compose(dispatch, getTables)
