import React from 'react';

import { Container, Header, Card, Divider, Icon } from 'semantic-ui-react'
import Pagination from '../../components/Pagination'

import BiopicList from './components/BiopicList'
import enhance from './enhance'

const Users = ({
  biopics = [], currentPage = 1, totalCount = 0, perPage = 50, getBiopics, motif: { teal, violet }
}) => (
  <Container fluid>
    <Header as='h1' color={violet}>
      <Icon name='film' color={teal} />
      Biopics
    </Header>
    <Divider />
    <Card.Group itemsPerRow={2}>
      <BiopicList biopics={biopics} />
    </Card.Group>
    <Divider />
    <Container fluid>
      <Pagination activePage={currentPage} totalCount={totalCount} perPage={perPage} onPageChange={getBiopics} />
    </Container>
  </Container>
);

export default enhance(Users)
