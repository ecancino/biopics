import React from 'react';

import { Container, Pagination } from 'semantic-ui-react'

export default ({ totalPages, onPageChange }) =>
  <Container textAlign='center'>
    <Pagination
      totalPages={totalPages}
      onPageChange={(e, { activePage }) => onPageChange(activePage)}
      boundaryRange={5}
      siblingRange={1}
      firstItem={null}
      lastItem={null}
      ellipsisItem={null}
      prevItem={null}
      nextItem={null}
    />
  </Container>
