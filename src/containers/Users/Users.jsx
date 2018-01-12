import React from 'react';

import { Container, Header, Card } from 'semantic-ui-react'

import UserList from './components/UserList'
import enhance from './enhance'

const Users = ({ users = [] }) => (
  <Container>
    <Header as='h1'>Biopics</Header>
    <Card.Group itemsPerRow={2}>
      <UserList users={users} />
    </Card.Group>
  </Container>
);

export default enhance(Users)
