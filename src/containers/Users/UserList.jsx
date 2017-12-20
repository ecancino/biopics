import React from 'react';
import { map, compose } from 'ramda'
import { connect } from 'react-redux'

import Subheader from 'material-ui/Subheader';
import List from 'material-ui/List/List';

import UserListItem from './UserListItem'

import { dispatch } from '../../store'
import { requestUsers } from '../../thunks'

import { onMount, withSpinner } from '../../hocs'

const UserList = ({ users = [] }) => (
  <List>
    <Subheader>Users</Subheader>
    {map(user => <UserListItem key={user.id} user={user} />, users)}
  </List>
);

const onLoad = onMount(compose(dispatch, requestUsers))
const withProps = connect(({ users }) => ({ users }))
const withLoader = withSpinner(({ users }) => !users.length)

const enhance = compose(withProps, onLoad, withLoader)
export default enhance(UserList)
