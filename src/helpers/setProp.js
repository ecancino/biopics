import curry from 'ramda/src/curry'
import converge from 'ramda/src/converge'
import assoc from 'ramda/src/assoc'
import identity from 'ramda/src/identity'

export default curry((p, t) => converge(assoc(p), [t, identity]))