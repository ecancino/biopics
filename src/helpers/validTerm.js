import compose from 'ramda/src/compose'
import unless from 'ramda/src/unless'
import length from 'ramda/src/length'
import always from 'ramda/src/always'
import path from 'ramda/src/path'
import lte from 'ramda/src/lte'

const validTerm = compose(unless(compose(lte(4), length), always(null)), path(['target', 'value']))

export default validTerm
