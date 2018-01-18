import compose from 'ramda/src/compose'

import { history } from '../../../providers/router'
import { setBiopic, setCountries, setTypes } from './actions'
import { getBiopicData, patchBiopic } from '../../../store/thunks'

export const saveBiopic = biopic => dispatch =>
  patchBiopic(biopic)
    .then(compose(dispatch, () => setBiopic({})))
    .then(() => history.replace('/biopics'))

export const getData = id => dispatch =>
  getBiopicData(id)
    .then(([ biopic, countries, types]) => {
      compose(dispatch, setBiopic)(biopic)
      compose(dispatch, setCountries)(countries)
      compose(dispatch, setTypes)(types)
    })
