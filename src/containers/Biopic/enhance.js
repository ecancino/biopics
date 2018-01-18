import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import compose from 'ramda/src/compose'
import path from 'ramda/src/path'
import isNil from 'ramda/src/isNil'

import { dispatch } from '../../store'
import { getData, saveBiopic } from './store/thunks'
import { onMount, withSpinner } from '../../hocs'

const hasBiopic = compose(isNil, path(['initialValues', 'id']))
const withLoader = withSpinner(hasBiopic)

const getBiopicId = path(['params', 'biopicId'])
const getBiopicData = compose(dispatch, getData, getBiopicId)
const onLoad = onMount(getBiopicData)

const withProps = connect(
  ({ biopic: { biopic, countries, types } }) => ({ initialValues: biopic, countries, types }),
  { saveBiopic }
)

const withForm = reduxForm({ form: 'biopic', enableReinitialize: true })

export default compose(withProps, withForm, onLoad, withLoader)
