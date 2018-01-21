import PropTypes from 'prop-types'
import branch from 'recompose/branch'
import lifecycle from 'recompose/lifecycle'
import withContext from 'recompose/withContext'
import getContext from 'recompose/getContext'
import renderComponent from 'recompose/renderComponent'

import Spinner from '../components/Spinner'
import Message from '../components/Message'

export const withSpinner = isLoading => branch(isLoading, renderComponent(Spinner))
export const withMessage = hasMessage => branch(hasMessage, renderComponent(Message))

export const onMount = onLoad => lifecycle({
  componentDidMount() {
    onLoad(this.props)
  }
})

export const addMotif = motif => withContext({ motif: PropTypes.object }, () => ({ motif }))

export const withMotif = getContext({ motif: PropTypes.object })
