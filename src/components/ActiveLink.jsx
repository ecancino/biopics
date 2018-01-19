import React from 'react';

import { Icon } from 'semantic-ui-react'

export default ({ active, color, onClick }) =>
  <Icon name='circle' onClick={onClick} className='link' style={{ float: 'right' }} color={color} />
