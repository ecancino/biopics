import invoker from 'ramda/src/invoker'
import useWith from 'ramda/src/useWith'
import call from 'ramda/src/call'
import identity from 'ramda/src/identity'

const stopPropagation = invoker(0, 'stopPropagation')
const singleEvent = useWith(call, [identity, stopPropagation])

export default singleEvent