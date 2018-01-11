import React from 'react';

import { Item } from 'semantic-ui-react'

import UserList from './components/UserList'
import enhance from './enhance'

const Users = ({ users = [] }) => (
  <Item.Group>
    <h1>Biopics</h1>
    <UserList users={users} />
  </Item.Group>
);

export default enhance(Users)
