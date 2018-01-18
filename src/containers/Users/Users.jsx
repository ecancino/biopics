import React from 'react';

import { Container, Header, Card, Divider, Icon } from 'semantic-ui-react'
import Pagination from '../../components/Pagination'

import UserList from './components/UserList'
import enhance from './enhance'

const Users = ({
  users = [], currentPage = 1, totalCount = 0, perPage = 50, getUsers, motif: { teal, violet }
}) => (
  <Container>
    <Header as='h1' color={violet}>
      <Icon name='film' color={teal} />
      Biopics
    </Header>
    <Divider />
    <Card.Group itemsPerRow={2}>
      <UserList users={users} />
    </Card.Group>
    <Divider />
    <Pagination activePage={currentPage} totalCount={totalCount} perPage={perPage} onPageChange={getUsers} />
  </Container>
);

export default enhance(Users)
