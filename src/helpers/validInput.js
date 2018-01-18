import compose from 'ramda/src/compose'
import unless from 'ramda/src/unless'
import length from 'ramda/src/length'
import always from 'ramda/src/always'
import path from 'ramda/src/path'
import lte from 'ramda/src/lte'

const gt3 = compose(lte(4), length)
const isValid = unless(gt3, always(null));
const validInput = compose(isValid, path(['target', 'value']))

export default validInput
