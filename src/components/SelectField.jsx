import React from 'react'

import Combobox from 'react-widgets/lib/Combobox'

export default ({ input, options, textField = 'text', valueField = 'value', suggest = true, tabIndex = '-1', ...other }) =>
  <Combobox {...input} textField={textField} valueField={valueField} data={options} tabIndex={tabIndex} suggest={suggest} {...other} />
