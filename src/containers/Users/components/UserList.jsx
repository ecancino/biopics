import React from 'react';
import compose from 'ramda/src/compose'
import map from 'ramda/src/map'
import prop from 'ramda/src/prop'

import UserLink from './UserLink'

const toUserLinks = map(user => <UserLink key={user.id} user={user} />)
const UserList = compose(toUserLinks, prop('users'))

export default UserList
