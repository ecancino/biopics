import curry from 'ramda/src/curry'
import reduce from 'ramda/src/reduce'
import assoc from 'ramda/src/assoc'
import keys from 'ramda/src/keys'
import propOr from 'ramda/src/propOr'
import prop from 'ramda/src/prop'

const renameKeys = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(propOr(key, key, keysMap), prop(key, obj), acc), {}, keys(obj))
);

export default renameKeys
