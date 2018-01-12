import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import compose from 'ramda/src/compose'
import path from 'ramda/src/path'
import isNil from 'ramda/src/isNil'

import { dispatch } from '../../store'
import { getData, saveUser } from './store/thunks'
import { onMount, withSpinner } from '../../hocs'

const hasUser = compose(isNil, path(['initialValues']))
const withLoader = withSpinner(hasUser)

const getUserId = path(['params', 'userId'])
const getUserData = compose(dispatch, getData, getUserId)
const onLoad = onMount(getUserData)

const withProps = connect(
  ({ user: { user, countries, types } }) => ({ initialValues: user, countries, types }), 
  { saveUser }
)

const withForm = reduxForm({ form: 'user', enableReinitialize: true })

export default compose(withProps, withForm, onLoad, withLoader)
