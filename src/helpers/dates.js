import compose from 'ramda/src/compose'
import { format } from 'date-fns/esm/fp'

const getUTCDate = (dateString = Date.now()) => {
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

export const toDate = format('YYYY-MM-DD')
export const fromDate = compose(format('D MMMM YYYY'), getUTCDate)
