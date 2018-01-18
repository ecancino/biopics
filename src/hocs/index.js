import { lifecycle, branch, renderComponent } from 'recompose'

import Spinner from '../components/Spinner'
import Message from '../components/Message'

export const withSpinner = isLoading => branch(isLoading, renderComponent(Spinner))
export const withMessage = hasMessage => branch(hasMessage, renderComponent(Message))

export const onMount = onLoad => lifecycle({
  componentDidMount() {
    onLoad(this.props)
  }
})
