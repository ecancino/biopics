import React from 'react'
import ReduxProvider from '../providers/redux'
import ThemeProvider from '../providers/theme'
import RouterProvider from '../providers/router'

const Root = () => (
  <ReduxProvider>
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  </ReduxProvider>
)

export default Root