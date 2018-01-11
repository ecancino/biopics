import React from 'react';
import { Link } from 'react-router'
import { Item, Icon, Divider } from 'semantic-ui-react'

const UserLink = ({ user }) =>
  <Item as={Link} to={`/user/${user.id}`}>
    <Item.Image as={Icon} name='user' circular size='massive' color='purple' />
    <Item.Content>
      <Item.Header>{user.subject}</Item.Header>
      <Item.Description>{user.title}</Item.Description>
    </Item.Content>
    <Divider />
  </Item>

export default UserLink
