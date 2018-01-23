import React from 'react'

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import Errors from './Errors'

import { getUTCDate, toMiddleEndian } from '../helpers/dates'

export default ({ input: { value, onChange }, meta, showTime = false, tabIndex = '0', touched, ...other }) =>
  <div>
    <DateTimePicker value={!value ? getUTCDate() : getUTCDate(value)} onChange={onChange} format={toMiddleEndian} tabIndex={tabIndex} time={showTime} {...other} />
    <Errors {...meta} touched={touched} />
  </div>
