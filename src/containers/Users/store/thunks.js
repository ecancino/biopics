import compose from 'ramda/src/compose'

import request from '../../../helpers/request'
import { history } from '../../../providers/router'
import { setUsers, setTotalCount, setPage } from './actions'

export const requestUsers = (page = 1) => dispatch =>
  request.get(`/biopics?_page=${page}&_limit=50`)
    .then(({ data, headers }) => {
      history.push(`/users/${page}`)
      compose(dispatch, setPage)(page)
      compose(dispatch, setUsers)(data)
      compose(dispatch, setTotalCount, Number)(headers['x-total-count'])
    })

export const findUsers = q => dispatch =>
  request.get(`/biopics?q=${1}`)
    .then(compose(dispatch, setUsers))
