import React from 'react';
import { Button } from 'semantic-ui-react'

const BiopicLink = ({ content, as = 'a', ...rest }) =>
  <Button content={content} as={as} compact size='small' role='button' tabIndex='-1' {...rest} />

export default BiopicLink
