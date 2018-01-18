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
    date.getUTCMilliseconds(),
  );
};

export const toMiddleEndian = format('MM/DD/YYYY')
export const toYear = format('YYYY')
