import compose from 'ramda/src/compose'

import request from '../helpers/request'
import { setUsers, setUser } from '../actions'


export const requestUsers = () => dispatch =>
  request.get(`/?results=15`)
    .then(compose(dispatch, setUsers))

export const requestUser = id => dispatch =>
  request.get(`/`)
    .then(compose(dispatch, setUser))
