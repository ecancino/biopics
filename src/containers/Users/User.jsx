import React from 'react'
import { connect } from 'react-redux'
import { compose, identity, path, isNil } from 'ramda'

import { dispatch } from '../../store'
import { requestUser } from '../../thunks'

import { onMount, withSpinner } from '../../hocs'

const User = ({ user }) => (
  <pre>{JSON.stringify(user, null, '\t')}</pre>
)

const getUserId = path(['params', 'userId'])
const getUser = compose(dispatch, requestUser, getUserId)
const onLoad = onMount(getUser)

const withProps = connect(identity)

const hasUser = compose(isNil, path(['user']))
const withLoader = withSpinner(hasUser)

const enhance = compose(withProps, onLoad, withLoader)
export default enhance(User)
