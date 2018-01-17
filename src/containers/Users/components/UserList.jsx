import React from 'react';
import compose from 'ramda/src/compose'
import map from 'ramda/src/map'
import prop from 'ramda/src/prop'

import UserCard from './UserCard'

const toUserLinks = map(user => <UserCard key={user.id} user={user} />)
const UserList = compose(toUserLinks, prop('users'))

export default UserList
