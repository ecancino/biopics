import compose from 'ramda/src/compose'
import path from 'ramda/src/path'

import request from '../../../helpers/request'
import fromUsers from '../helpers/fromUsers'
import { history } from '../../../providers/router'
import { setUsers, setTotalCount, setPage, setError, updateUser } from './actions'

export const requestUsers = (page = 1) => dispatch =>
  request.get(`/biopics?_page=${page}&_limit=50`)
    .then(fromUsers)
    .then(({ users, totalCount }) => {
      history.push(`/users/${page}`)
      compose(dispatch, setError)(path(['length'], users) ? undefined : 'No users')
      compose(dispatch, setPage)(page)
      compose(dispatch, setUsers)(users)
      compose(dispatch, setTotalCount)(totalCount)
    })

export const changeUser = user => dispatch =>
  request.patch(`/biopics/${user.id}`, user)
    .then(() => compose(dispatch, updateUser)(user))

export const deleteUser = (userId, currentPage) => dispatch =>
  request.delete(`/biopics/${userId}`)
    .then(() => compose(dispatch, requestUsers)(currentPage))
