import React from 'react';
import { Link } from 'react-router'

import ListItem from 'material-ui/List/ListItem';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

const UserLink = ({ user }) => (
  <Link to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
    <ListItem role='button'
      primaryText={user.subject}
      secondaryText={user.title}
      rightIcon={<ModeEdit />}
    />
  </Link>
)

export default UserLink
