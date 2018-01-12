import compose from 'ramda/src/compose'
import { format } from 'date-fns/esm/fp'

export const getUTCDate = (dateString = Date.now()) => {
  const date = new Date(dateString);
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );
};

export const toDate = format('MM/DD/YYYY')
export const fromDate = compose(format('MM/DD/YYYY'), getUTCDate)
export const toYear = format('YYYY')
