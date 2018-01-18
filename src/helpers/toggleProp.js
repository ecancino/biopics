import evolve from 'ramda/src/evolve'
import not from 'ramda/src/not'

const toggleProp = prop => evolve({ [prop]: not })

export default toggleProp
