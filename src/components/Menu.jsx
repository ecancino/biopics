import React from 'react'

import { Menu } from 'semantic-ui-react'
import MenuLink from './MenuLink'

export default () => (
  <Menu widths='two' attached='top'>
    <MenuLink icon='home' content='Home' to='/' />
    <MenuLink icon='users' content='Users' to='/users' />
  </Menu>
)
