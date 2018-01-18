import compose from 'ramda/src/compose'
import { connect } from 'react-redux'
import withMotif from 'react-motif/withMotif'

import { dispatch } from '../../store'
import { requestBiopics } from './store/thunks'
import { onMount, withSpinner, withMessage } from '../../hocs'

const onLoad = onMount(compose(dispatch, ({ params: { page } }) => requestBiopics(page)))
const withLoader = withSpinner(({ biopics, errorMessage }) => !biopics && !errorMessage)
const withError = withMessage(({ message }) => message)

const stateProps = ({ biopics: { biopics, errorMessage, currentPage, totalCount, perPage } }) =>
  ({ biopics, message: errorMessage, currentPage, totalCount, perPage })
const dispatchProps = dispatch => ({ getBiopics: compose(dispatch, requestBiopics) })
const withProps = connect(stateProps, dispatchProps)

export default compose(withProps, onLoad, withLoader, withError, withMotif)
