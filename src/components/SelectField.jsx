import React from 'react'

import { Dropdown } from 'semantic-ui-react'
import Errors from './Errors'

export default ({ input: { value, onChange }, meta, options, suggest = true, tabIndex = '0', ...other }) =>
  <div>
    <Dropdown fluid search selection value={value} onChange={(e, o) => onChange(o.value)} options={options} tabIndex={tabIndex} {...other} />
    <Errors {...meta} />
  </div>
