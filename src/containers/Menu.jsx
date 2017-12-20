import React from 'react'

import Toolbar from 'material-ui/Toolbar/Toolbar'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'
import ToolbarTitle from 'material-ui/Toolbar/ToolbarTitle'

import MenuLink from '../components/MenuLink'

export default ({ children }) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text='PoC' />
      <MenuLink to="/users">Users</MenuLink>
    </ToolbarGroup>
  </Toolbar>
)
