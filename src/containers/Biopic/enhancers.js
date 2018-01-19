import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import compose from 'ramda/src/compose'
import isNil from 'ramda/src/isNil'
import path from 'ramda/src/path'

import { withSpinner } from '../../hocs'

export const withProps = saveBiopic => connect(
  ({ biopic: { biopic, countries, types } }) => ({ initialValues: biopic, countries, types }),
  { saveBiopic }
)

export const withForm = reduxForm({ form: 'biopic', enableReinitialize: true })

const hasBiopic = compose(isNil, path(['initialValues', 'id']))
export const withLoader = withSpinner(hasBiopic)
