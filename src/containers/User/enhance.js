import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import compose from 'ramda/src/compose'
import path from 'ramda/src/path'
import isNil from 'ramda/src/isNil'

import { dispatch } from '../../store'
import { requestUser, saveUser } from './store/thunks'
import { onMount, withSpinner } from '../../hocs'

const hasUser = compose(isNil, path(['initialValues']))
const withLoader = withSpinner(hasUser)

const getUserId = path(['params', 'userId'])
const getUser = compose(dispatch, requestUser, getUserId)
const onLoad = onMount(getUser)

const withProps = connect(state => ({ initialValues: state.user }), { saveUser })

const withForm = reduxForm({ form: 'user', enableReinitialize: true })

export default compose(withProps, withForm, onLoad, withLoader)
