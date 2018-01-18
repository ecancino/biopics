import React from 'react';

import { Container, Header, Card, Divider, Icon, Input } from 'semantic-ui-react'

import UserList from '../Users/components/UserList'
import enhance from './enhance'

const Search = ({
  biopics = [], loading, searchBiopics, motif: { violet, teal }
}) => (
  <Container fluid>
    <Header as='h1' color={violet}>
      <Icon name='search' color={teal} />
      Results
    </Header>
    <Input fluid name='q' loading={loading} icon='search' placeholder='Search...' onChange={searchBiopics} />
    <Divider />
    <Card.Group itemsPerRow={2} style={{ display: biopics.length ? 'flex' : 'none' }}>
      <UserList users={biopics} />
    </Card.Group>
  </Container>
);

export default enhance(Search)
