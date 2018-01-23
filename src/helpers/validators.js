import isURL from 'is-url'
import isAfter from 'date-fns/fp/isAfter'

export const isRequired = (value, a, b) => value ? undefined : `Is required.`

export const isURI = value => isURL(value) ? undefined : `Should be an URL.`

export const isPast = value => isAfter(value, Date.now()) ? undefined : `Should be before today`
