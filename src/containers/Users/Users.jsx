import React from 'react';
import compose from 'ramda/src/compose'
import divide from 'ramda/src/divide'

import { Container, Header, Card, Divider, Icon } from 'semantic-ui-react'
import Pagination from '../../components/Pagination'

import UserList from './components/UserList'
import enhance from './enhance'

const countPages = compose(n => n | 1, divide)

const Users = ({ users = [], errorMessage, currentPage = 1, totalCount = 0, perPage = 50, getUsers, theme: { primaryColor, secondaryColor } }) => (
  <Container>
    {!errorMessage ?
      (
      <div>
        <Header as='h1' color={secondaryColor}>
          <Icon name='film' color={primaryColor} />
          Biopics
        </Header>
        <Divider />
        <Card.Group itemsPerRow={2}>
          <UserList users={users} />
        </Card.Group>
        <Divider />
        <Pagination activePage={currentPage} totalPages={countPages(totalCount, perPage)} onPageChange={getUsers} />
      </div>
    ) :
    (
      <Header as='h1' color={secondaryColor}>
        {errorMessage}
      </Header>
    )
    }
  </Container>
);

export default enhance(Users)
