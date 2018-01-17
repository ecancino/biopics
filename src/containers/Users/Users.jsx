import React from 'react';
import compose from 'ramda/src/compose'
import divide from 'ramda/src/divide'

import { Container, Header, Card, Divider, Icon } from 'semantic-ui-react'
import Pagination from '../../components/Pagination'

import UserList from './components/UserList'
import enhance from './enhance'

const countPages = compose(n => n | 0, divide)

const Users = ({ users = [], totalCount = 0, perPage = 50, getUsers, theme: { primaryColor, secondaryColor } }) => (
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
    <Pagination totalPages={ countPages(totalCount, perPage) || totalCount } onPageChange={getUsers} />
  </Container>
);

export default enhance(Users)
