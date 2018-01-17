import React from 'react'
import equals from 'ramda/src/equals'
import startsWith from 'mellotron/startsWith'
import { Menu } from 'semantic-ui-react'
import MenuLink from './MenuLink'

export default ({ location: { pathname } }) =>
  <Menu widths='two' attached='top'>
    <MenuLink icon='home' content='Home' to='/' active={equals('/', pathname)} />
    <MenuLink icon='users' content='Users' to='/users' active={startsWith('/users', pathname)} />
  </Menu>
