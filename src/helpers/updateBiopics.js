import update from 'ramda/src/update'
import findById from './findById'

const updateBiopics = (id, biopics, biopic) => update(findById(id, biopics), biopic, biopics)

export default updateBiopics
