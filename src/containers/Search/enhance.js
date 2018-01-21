import compose from 'ramda/src/compose'
import { connect } from 'react-redux'

import { setBiopics } from '../Biopics/store/actions'
import { dispatch } from '../../store'
import { searchBiopics } from '../Biopics/store/thunks'
import { onMount, withMotif } from '../../hocs'

const onLoad = onMount(compose(dispatch, () => setBiopics([])))
const stateProps = ({ biopics: { biopics, loading } }) => ({ biopics, loading })
const dispatchProps = dispatch => ({ searchBiopics: compose(dispatch, searchBiopics) })
const withProps = connect(stateProps, dispatchProps)

export default compose(withProps, onLoad, withMotif)
