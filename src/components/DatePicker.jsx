import React from 'react'

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import { getUTCDate, toDate } from '../helpers/dates'

export default ({ input: { value, onChange }, showTime = false, tabIndex = '-1',...other }) =>
  <DateTimePicker value={getUTCDate(value)} onChange={onChange} format={toDate} tabIndex={tabIndex} time={showTime} {...other} />
