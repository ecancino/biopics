import React from 'react';
import { Link } from 'react-router'
import { Item, Button } from 'semantic-ui-react'

const UserLink = ({ user }) =>
  <Item as={Link} to={`/user/${user.id}`} style={{ display: 'block' }}>
    <Item.Content header={user.subject} description={user.title} meta={<Button icon='edit' floated='right' />} />
  </Item>

export default UserLink
