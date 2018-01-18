import converge from 'ramda/src/converge'
import findIndex from 'ramda/src/findIndex'
import pipe from 'ramda/src/pipe'
import nthArg from 'ramda/src/nthArg'
import propEq from 'ramda/src/propEq'

const findById = converge(findIndex, [pipe(nthArg(0), propEq('id')), nthArg(1)])

export default findById
