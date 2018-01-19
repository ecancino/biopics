import React from 'react'

import { Dropdown } from 'semantic-ui-react'

export default ({ input: { value, onChange }, options, suggest = true, tabIndex = '0', ...other }) =>
  <Dropdown fluid search selection value={value} onChange={(e, o) => onChange(o.value)} options={options} tabIndex={tabIndex} {...other} />
