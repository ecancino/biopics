import { connect } from 'react-redux'
import withMotif from 'react-motif/withMotif'
import compose from 'ramda/src/compose'

import toggleProp from '../../helpers/toggleProp'
import { deleteUser, changeUser } from '../../store/thunks'

const stateProps = ({ users: { currentPage } }) => ({ currentPage })
const dispatchProps = dispatch => ({
  deleteUser: compose(dispatch, deleteUser),
  changeUser: compose(dispatch, changeUser, toggleProp('active'))
})
const withProps = connect(stateProps, dispatchProps)

const enhance = compose(withProps, withMotif)

export default enhance
