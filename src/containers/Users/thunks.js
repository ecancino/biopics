import compose from 'ramda/src/compose'

import request from '../../helpers/request'
import { setUsers } from './actions'
import toUsers from '../../helpers/toUsers'

export const requestUsers = () => dispatch =>
  request.get(`/?results=15`)
    .then(toUsers)
    .then(compose(dispatch, setUsers))
