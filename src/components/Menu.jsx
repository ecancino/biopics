import React from 'react'
import equals from 'ramda/src/equals'
import startsWith from 'mellotron/startsWith'
import { Menu } from 'semantic-ui-react'
import MenuLink from './MenuLink'

export default ({ location: { pathname } }) =>
  <Menu widths='four' attached='top'>
    <MenuLink icon='home' content='Home' to='/' active={equals('/', pathname)} />
    <MenuLink icon='tasks' content='Biopics' to='/biopics' active={startsWith('/biopics/', pathname)} />
    <MenuLink icon='film' content='Biopic' to='/biopic/new' active={startsWith('/biopic/', pathname)} />
    <MenuLink icon='search' content='Search' to='/search' active={startsWith('/search', pathname)} />
  </Menu>
