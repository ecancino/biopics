import React from 'react'

import { Checkbox } from 'semantic-ui-react'

export default ({ input: { value, onChange }, tabIndex = 0, ...other }) =>
  <Checkbox checked={value} onChange={(e, o) => onChange(o.checked)} tabIndex={tabIndex} {...other} />
