import React from 'react';

import { Icon } from 'semantic-ui-react'

export default ({ active, color, onClick }) =>
  <Icon name={active ? 'dot' : ''} onClick={onClick} className='link circle outline' style={{ float: 'right' }} color={color} />
