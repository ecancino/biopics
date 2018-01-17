import React from 'react';

import { Container, Header, Card, Divider, Icon } from 'semantic-ui-react'
import Pagination from '../../components/Pagination'

import UserList from './components/UserList'
import enhance from './enhance'

const Users = ({
  users = [], currentPage = 1, totalCount = 0, perPage = 50, getUsers, theme: { primaryColor, secondaryColor }
}) => (
  <Container>
    <Header as='h1' color={secondaryColor}>
      <Icon name='film' color={primaryColor} />
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
