import React from 'react'

import { Link } from 'react-router'
import { Menu } from 'semantic-ui-react'

export default ({ to, icon, content, active }) =>
  <Menu.Item name={content} icon={icon} content={content} as={Link} to={to} className={active ? 'active' : ''} />
