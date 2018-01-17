import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { lifecycle, branch, renderComponent } from 'recompose'

import Spinner from '../components/Spinner'

export const withSpinner = isLoading => branch(isLoading, renderComponent(Spinner))

export const onMount = onLoad => lifecycle({
  componentDidMount() {
    onLoad(this.props)
  }
})

export const theme = Wrapped =>
  class ThemeComponent extends Component {
    static contextTypes = {
      theme: PropTypes.object.isRequired,
    }
    render() {
      const { theme } = this.context
      return (
        <Wrapped {...this.props} theme={theme} />
      )
    }
  }
