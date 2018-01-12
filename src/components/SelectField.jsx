import React from 'react'

import Combobox from 'react-widgets/lib/Combobox'
//
// let ListItem = (OK) => {
//   return <span>
//     <strong>{item.firstName}</strong>
//     {" " + item.lastName}
//   </span>
// };

export default ({ input, options, suggest = true, tabIndex = '-1', ...other }) =>
  <Combobox {...input} data={options} suggest={suggest} tabIndex={tabIndex} {...other} />
