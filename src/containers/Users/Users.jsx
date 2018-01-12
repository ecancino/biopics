import React from 'react';
import compose from 'ramda/src/compose'
import divide from 'ramda/src/divide'

import { Container, Header, Card, Divider } from 'semantic-ui-react'
import Pagination from '../../components/Pagination'

import UserList from './components/UserList'
import enhance from './enhance'

const countPages = compose(n => n | 0, divide)

const Users = ({ users = [], totalCount = 0, perPage = 10, getUsers }) => (
  <Container>
    <Header as='h1'>Biopics</Header>
    <Divider />
    <Card.Group itemsPerRow={2}>
      <UserList users={users} />
    </Card.Group>
    <Divider />
    <Pagination totalPages={ countPages(totalCount, perPage) || totalCount } onPageChange={getUsers} />
  </Container>
);

export default enhance(Users)
