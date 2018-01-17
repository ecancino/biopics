import React from 'react'

import ThemeProvider from '../components/Theme'

const theme = {
  primaryColor: 'teal',
  secondaryColor: 'violet',
}

export default ({ children }) =>
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
