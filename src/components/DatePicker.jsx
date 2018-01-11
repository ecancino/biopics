import React from 'react'

import { css } from 'aphrodite'
import { Input } from 'semantic-ui-react'
import DayPickerInput from 'react-day-picker/DayPickerInput';

import { getUTCDate, toDate } from '../helpers/dates'
import styles from '../styles'

export default ({ input: { value, onChange }, placeholder }) => {
  const displayDate = getUTCDate(value)
  return <DayPickerInput
    dayPickerProps={{
      selectedDays: [displayDate],
      month: displayDate,
      showOutsideDays: true,
      icon: 'search'
    }}
    onDayChange={date => onChange(toDate(date))}
    value={displayDate}
    formatDate={toDate}
    classNames={{
      container: css(styles.datePicker),
      overlay: css(styles.overlay)
    }}
    component={Input}
  />
}
