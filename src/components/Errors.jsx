import React from 'react'

import { Label, Icon } from 'semantic-ui-react'

export default ({ touched, invalid, error, warning }) =>
  <Label basic pointing
    style={{ display: touched && invalid ? 'flex' : 'none' }}
    color={warning ? 'yellow' : error ? 'red' : 'black'} >
    <Icon name='warning sign' />
    {error}
  </Label>
