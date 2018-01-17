import React from 'react';
import { Container, Pagination } from 'semantic-ui-react'

export default ({ totalPages, onPageChange, activePage }) =>
  <Container textAlign='center'>
    <Pagination siblingRange={1} firstItem={null} lastItem={null} ellipsisItem={null} prevItem={null} nextItem={null}
      onPageChange={(e, { activePage }) => onPageChange(activePage)}
      totalPages={totalPages}
      defaultActivePage={activePage}
      boundaryRange={3}
    />
  </Container>
