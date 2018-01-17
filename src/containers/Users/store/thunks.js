import compose from 'ramda/src/compose'
import evolve from 'ramda/src/evolve'
import path from 'ramda/src/path'

import request from '../../../helpers/request'
import renameKeys from '../../../helpers/renameKeys'
import { history } from '../../../providers/router'
import { setUsers, setTotalCount, setPage, setError } from './actions'

const fromData = compose(
  evolve({ totalCount: compose(Number, path(['x-total-count'])) }),
  renameKeys({ data: 'users', headers: 'totalCount' })
)

export const requestUsers = (page = 1) => dispatch =>
  request.get(`/biopics?_page=${page}&_limit=50`)
    .then(fromData)
    .then(({ users, totalCount }) => {
      history.push(`/users/${page}`)
      compose(dispatch, setError)(path(['length'], users) ? undefined : 'No users')
      compose(dispatch, setPage)(page)
      compose(dispatch, setUsers)(users)
      compose(dispatch, setTotalCount)(totalCount)
    })

export const deleteUser = (userId, currentPage) => dispatch =>
  request.delete(`/biopics/${userId}`)
    .then(() => compose(dispatch, requestUsers)(currentPage))

export const findUsers = q => dispatch =>
  request.get(`/biopics?q=${1}`)
    .then(compose(dispatch, setUsers))
