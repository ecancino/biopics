import React from 'react'

import { Input } from 'semantic-ui-react'

export default ({ input, tabIndex = '0', ...other }) =>
  <Input {...input} tabIndex={tabIndex} {...other} />
