import configure from 'react-widgets/lib/configure';
import { formatWithOptions, parse, addYears } from 'date-fns/esm/fp'
import * as locales from 'date-fns/esm/locale'
import propOr from 'ramda/src/propOr'

const { enUS } = locales

const getLocale = culture => propOr(enUS, culture, locales)
const endOfDecade = addYears(10)
const endOfCentury = addYears(100)
const getYear = (date, culture) => format(date, 'YYYY', culture)
const decade = (date, culture, { format }) =>
  `${getYear(date, culture)} - ${getYear(endOfDecade(date), culture)}`
const century = (date, culture, { format }) =>
  `${getYear(date, culture)} - ${getYear(endOfCentury(date), culture)}`
const firstOfWeek = culture => getLocale(culture).options.weekStartsOn
const format = (value, format, culture) => formatWithOptions({ locale: getLocale(culture) }, format, value)

export default () => {
  configure.setDateLocalizer({
    formats: {
      date: 'L',
      time: 'LT',
      default: 'lll',
      header: 'MMMM YYYY',
      footer: 'LL',
      weekday: 'dd',
      dayOfMonth: 'DD',
      month: 'MMM',
      year: 'YYYY',
      decade,
      century
    },
    firstOfWeek,
    parse,
    format
  })
}
