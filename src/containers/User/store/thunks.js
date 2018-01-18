import compose from 'ramda/src/compose'

import { history } from '../../../providers/router'
import { setUser, setCountries, setTypes } from './actions'
import { getUserData, patchUser } from '../../../store/thunks'

export const saveUser = user => dispatch =>
  patchUser(user)
    .then(compose(dispatch, () => setUser({})))
    .then(() => history.push('/users'))

export const getData = id => dispatch =>
  getUserData(id)
    .then(([ user, countries, types]) => {
      compose(dispatch, setUser)(user)
      compose(dispatch, setCountries)(countries)
      compose(dispatch, setTypes)(types)
    })
