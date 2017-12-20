import { lifecycle, branch, renderComponent } from 'recompose'

import Spinner from '../components/Spinner'

export const withSpinner = isLoading => branch(isLoading, renderComponent(Spinner))

export const onMount = onLoad => lifecycle({
  componentDidMount() {
    onLoad(this.props)
  }
})
