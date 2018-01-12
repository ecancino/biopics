import React from 'react';

import { Container, Icon } from 'semantic-ui-react'

export default ({ name = 'setting' }) =>
  <Container textAlign='center'>
    <Icon loading name={name} size='massive' color='violet' />
  </Container>
