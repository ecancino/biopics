import compose from 'ramda/src/compose'

import request from '../../helpers/request'
import { setUser } from './actions'

export const requestUser = id => dispatch =>
  request.get(`/`)
    .then(compose(dispatch, setUser))
