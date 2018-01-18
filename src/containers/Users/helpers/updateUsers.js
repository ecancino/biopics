import update from 'ramda/src/update'
import findById from './findById'

const updateUsers = (id, users, user) => update(findById(id, users), user, users)

export default updateUsers
