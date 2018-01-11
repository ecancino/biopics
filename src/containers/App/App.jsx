import React from 'react'

import { Container } from 'semantic-ui-react'
import Menu from '../../components/Menu'

export default ({ children }) => (
  <Container text style={{ marginTop: '20px' }}>
    <Menu />
    { children }
  </Container>
)
