import compose from 'ramda/src/compose'
import { connect } from 'react-redux'
import withMotif from 'react-motif/withMotif'

import { searchBiopics } from '../Biopics/store/thunks'
import { withMessage } from '../../hocs'

const withError = withMessage(({ message }) => message)
const stateProps = ({ biopics: { biopics } }) => ({ biopics })
const dispatchProps = dispatch => ({ searchBiopics: compose(dispatch, searchBiopics) })
const withProps = connect(stateProps, dispatchProps)

export default compose(withProps, withError, withMotif)
