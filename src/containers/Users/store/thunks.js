import compose from 'ramda/src/compose'
import path from 'ramda/src/path'

import request from '../../../helpers/request'
import { setUsers } from './actions'

export const requestUsers = () => dispatch =>
  request.get(`/biopics?_page=1&_limit=20`)
    .then(path(['data']))
    .then(compose(dispatch, setUsers))
