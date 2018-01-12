import compose from 'ramda/src/compose'

import request from '../../../helpers/request'
import { setUsers, setTotalCount } from './actions'

export const requestUsers = page => dispatch =>
  request.get(`/biopics?_page=${page}&_limit=10`)
    .then(({ data, headers }) => {
      compose(dispatch, setUsers)(data)
      compose(dispatch, setTotalCount, Number)(headers['x-total-count'])
    })

export const findUsers = q => dispatch =>
  request.get(`/biopics?q=${1}`)
    .then(compose(dispatch, setUsers))
