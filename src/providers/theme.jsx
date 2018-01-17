import React from 'react'
import PropTypes from 'prop-types'
import { withContext } from 'recompose'

const theme = {
  primaryColor: 'teal',
  secondaryColor: 'violet',
  dangerColor: 'red',
}

const ThemeProvider = theme => withContext({ theme: PropTypes.object }, () => ({ theme }))

export default ThemeProvider(theme)
