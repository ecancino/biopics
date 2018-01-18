import React from 'react';

import { Container, Header, Card, Divider, Icon, Input } from 'semantic-ui-react'

import UserList from '../Users/components/UserList'
import enhance from './enhance'

const Search = ({
  results = [], loading, findUsers, motif: { violet, teal }
}) => (
  <Container fluid>
    <Header as='h1' color={violet}>
      <Icon name='search' color={teal} />
      Results
    </Header>
    <Input fluid name='q' loading={loading} icon='search' placeholder='Search...' onChange={findUsers} />
    <Divider />
    <Card.Group itemsPerRow={2} style={{ display: results.length ? 'flex' : 'none' }}>
      <UserList users={results} />
    </Card.Group>
  </Container>
);

export default enhance(Search)
