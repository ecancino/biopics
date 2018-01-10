import React from 'react'

import DatePicker from 'material-ui/DatePicker';
import { toDate, fromDate } from '../helpers/dates'

export default ({ input: { onChange, value }, label }) =>
  <DatePicker autoOk={true} floatingLabelText={label} fullWidth={true}
    textFieldStyle={{ floatingLabelText: label }}
    onChange={(event, value) => onChange(toDate(value))}
    formatDate={fromDate}
    value={!value ? null : new Date(value)}
  />
