import useWith from 'ramda/src/useWith'
import merge from 'ramda/src/merge'
import identity from 'ramda/src/identity'
import objOf from 'ramda/src/objOf'

const mergeProp = prop => useWith(merge, [identity, objOf(prop)])

export default mergeProp
