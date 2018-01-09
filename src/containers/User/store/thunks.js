import compose from 'ramda/src/compose'
import path from 'ramda/src/path'

import { history } from '../../../providers/router'

import request from '../../../helpers/request'
import { setUser, loadUser } from './actions'

export const requestUser = id => dispatch =>
  request.get(`/biopics/${id}`)
    .then(path(['data']))
    .then(compose(dispatch, setUser))
    .then(compose(dispatch, loadUser))

export const saveUser = user => dispatch =>
  request.patch(`/biopics/${user.id}`, user)
    .then(compose(dispatch, () => setUser({})))
    .then(() => history.push('/users'))
