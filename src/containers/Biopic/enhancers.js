import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import compose from 'ramda/src/compose'
import not from 'ramda/src/not'
import prop from 'ramda/src/prop'
import isEmpty from 'ramda/src/isEmpty'

import { onMount, withSpinner } from '../../hocs'
import { getBiopicId, updateBiopic, getBiopicNew, createBiopic } from './store/thunks'

const withProps = saveBiopic => connect(
  ({ biopic: { biopic, countries, types } }) => ({ initialValues: biopic, countries, types }),
  { saveBiopic }
)
const withForm = reduxForm({ form: 'biopic', enableReinitialize: true })
const hasBiopic = compose(not, prop('initialized'))

export const enhanceNew = compose(withProps(createBiopic), withForm, onMount(getBiopicNew))
export const enhanceId = compose(withProps(updateBiopic), withForm, onMount(getBiopicId), withSpinner(hasBiopic))
