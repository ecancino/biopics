import React from 'react'

import { Input } from 'semantic-ui-react'
import Errors from './Errors'

export default ({ input, meta, label, tabIndex = '0', ...other }) =>
  <div>
    <Input {...input} tabIndex={tabIndex} {...other} />
    <Errors {...meta} />
  </div>
