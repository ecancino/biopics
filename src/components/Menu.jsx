import React from 'react'

import AppBar from 'material-ui/AppBar';
import MenuLink from './MenuLink'

export default ({ children }) => (
  <AppBar
    title={'PoC'}
    iconElementRight={<MenuLink to="/users">Users</MenuLink>}
  />
)
