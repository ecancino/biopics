import PropTypes from 'prop-types'

import { lifecycle, branch, renderComponent, getContext } from 'recompose'

import Spinner from '../components/Spinner'
import Message from '../components/Message'

export const withSpinner = isLoading => branch(isLoading, renderComponent(Spinner))
export const withMessage = hasMessage => branch(hasMessage, renderComponent(Message))

export const onMount = onLoad => lifecycle({
  componentDidMount() {
    onLoad(this.props)
  }
})

export const withTheme = getContext({ theme: PropTypes.object })
