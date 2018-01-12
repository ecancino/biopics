import compose from 'ramda/src/compose'
import path from 'ramda/src/path'

import { history } from '../../../providers/router'

import request, { all } from '../../../helpers/request'
import { setUser, setCountries, setTypes } from './actions'

const dataPath = path(['data'])

export const requestUser = id => request.get(`/biopics/${id}`).then(dataPath)
export const requestCountries = () => request.get(`/countries`).then(dataPath)
export const requestTypes = () => request.get(`/types`).then(dataPath)

export const saveUser = user => dispatch =>
  request.patch(`/biopics/${user.id}`, user)
    .then(compose(dispatch, () => setUser({})))
    .then(() => history.push('/users'))

export const getData = id => dispatch =>
  all([ requestUser(id),  requestCountries(), requestTypes() ])
  .then(([ user, countries, types]) => {
    compose(dispatch, setUser)(user)
    compose(dispatch, setCountries)(countries)
    compose(dispatch, setTypes)(types)
  })
