import React from 'react';

import List from 'material-ui/List/List';

import UserList from './components/UserList'
import enhance from './enhance'

const Users = ({ users = [] }) => (
  <List>
    <h1>Biopics</h1>
    <UserList users={users} />
  </List>
);

export default enhance(Users)
