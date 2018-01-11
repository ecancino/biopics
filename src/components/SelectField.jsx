import React from 'react'

import { Select } from 'semantic-ui-react'

export default ({ input: { name, value, onChange }, placeholder, type, options, tabIndex = -1, ...other }) =>
  <Select name={name} value={value} options={options} placeholder={placeholder} tabIndex={tabIndex} {...other}
    onChange={(e, o) => onChange(o.value)}
  />
