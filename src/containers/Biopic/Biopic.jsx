import React from 'react'
import { Link } from 'react-router'
import { Container, Icon, Divider } from 'semantic-ui-react'

export default ({ children, location }) =>
  <Container>
    <Link to='/biopics'>
      <Icon name='chevron left' size='small' />
      Back
    </Link>
    <Divider />
    { children }
  </Container>
