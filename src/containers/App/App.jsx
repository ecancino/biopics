import React from 'react'

import { Container, Segment } from 'semantic-ui-react'
import Menu from '../../components/Menu'

export default ({ children, location }) =>
  <Container style={{ margin: '20px 0' }}>
    <Menu location={location} />
    <Segment attached='bottom' raised>
      { children }
    </Segment>
  </Container>
