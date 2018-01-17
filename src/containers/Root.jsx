import React from 'react'
import ReduxProvider from '../providers/redux'
import ThemeProvider from '../providers/theme'
import RouterProvider from '../providers/router'

const Root = () => (
  <ThemeProvider>
    <ReduxProvider>
      <RouterProvider />
    </ReduxProvider>
  </ThemeProvider>
)

export default Root
