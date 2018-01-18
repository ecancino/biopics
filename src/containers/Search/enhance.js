import compose from 'ramda/src/compose'
import { connect } from 'react-redux'
import withMotif from 'react-motif/withMotif'

import { findUsers } from './store/thunks'
import { withMessage } from '../../hocs'

const withError = withMessage(({ message }) => message)
const stateProps = ({ search: { results } }) => ({ results })
const dispatchProps = dispatch => ({ findUsers: compose(dispatch, findUsers) })
const withProps = connect(stateProps, dispatchProps)

export default compose(withProps, withError, withMotif)
