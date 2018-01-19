import React from 'react'

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import { getUTCDate, toMiddleEndian } from '../helpers/dates'

export default ({ input: { value, onChange }, showTime = false, tabIndex = '0',...other }) =>
  <DateTimePicker
    value={!value ? null : getUTCDate(value)}
    onChange={onChange}
    format={toMiddleEndian}
    tabIndex={tabIndex}
    time={showTime}
    {...other}
  />
