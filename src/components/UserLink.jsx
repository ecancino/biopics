import React from 'react';
import { Link } from 'react-router'

import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

const UserLink = ({ user }) => (
  <Link to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
    <ListItem
      role='button'
      primaryText={`${user.firstname} ${user.lastname}`}
      leftAvatar={<Avatar src={user.avatar} alt={`${user.firstname} ${user.lastname}`} />}
      rightIcon={<ModeEdit />}
    />
  </Link>
)

export default UserLink
