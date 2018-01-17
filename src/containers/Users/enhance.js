import compose from 'ramda/src/compose'
import { connect } from 'react-redux'

import { dispatch } from '../../store'
import { requestUsers } from './store/thunks'
import { onMount, withSpinner, theme } from '../../hocs'

const onLoad = onMount(compose(dispatch, ({ params: { page } }) => requestUsers(page)))
const withLoader = withSpinner(({ users, errorMessage }) => !users && !errorMessage)

const stateProps = ({ users: { users, errorMessage, currentPage, totalCount, perPage } }) =>
  ({ users, errorMessage, currentPage, totalCount, perPage })
const dispatchProps = dispatch => ({ getUsers: compose(dispatch, requestUsers) })
const withProps = connect(stateProps, dispatchProps)

export default compose(withProps, onLoad, withLoader, theme)
