import React from 'react'

import { Link } from 'react-router'
import { Menu } from 'semantic-ui-react'

export default () => (
  <Menu>
    <Menu.Item name='Home' as={Link} to='/' activeClassName="active">Home</Menu.Item>
    <Menu.Item name='Users' as={Link} to='/users' activeClassName="active">Users</Menu.Item>
  </Menu>
)
