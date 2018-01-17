import React from 'react';
import compose from 'ramda/src/compose'
import divide from 'ramda/src/divide'

import { Container, Pagination } from 'semantic-ui-react'

const countPages = compose(n => n | 1, divide)

export default ({ onPageChange, activePage, totalCount, perPage }) =>
  <Container textAlign='center'>
    <Pagination siblingRange={1} firstItem={null} lastItem={null} ellipsisItem={null} prevItem={null} nextItem={null}
      onPageChange={(e, { activePage }) => onPageChange(activePage)}
      totalPages={countPages(totalCount, perPage)}
      defaultActivePage={activePage}
      boundaryRange={3}
    />
  </Container>
