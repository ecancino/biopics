import React from 'react'

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import { getUTCDate, toDate } from '../helpers/dates'

export default ({ input: { value, onChange }, placeholder, showTime = false }) =>
  <DateTimePicker value={getUTCDate(value)} onChange={onChange} format={toDate} time={showTime} />
