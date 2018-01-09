import compose from 'ramda/src/compose'
import pick from 'ramda/src/pick'
import { connect } from 'react-redux'

import { dispatch } from '../../store'
import { requestUsers } from './store/thunks'
import { onMount, withSpinner } from '../../hocs'

const onLoad = onMount(compose(dispatch, requestUsers))
const withLoader = withSpinner(({ users }) => !users.length)
const withProps = connect(pick(['users']))

export default compose(withProps, onLoad, withLoader)
