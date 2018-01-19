import React from 'react';

import { Container, Icon } from 'semantic-ui-react'

export default ({ name = 'setting', loading }) =>
  <Container textAlign='center' style={{ display: loading ? 'block' : 'none' }}>
    <Icon loading name={name} size='massive' color='violet' />
  </Container>
