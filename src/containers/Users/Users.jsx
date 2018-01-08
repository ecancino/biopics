import React from 'react';
import { map, compose, prop } from 'ramda'
import { connect } from 'react-redux'

import Subheader from 'material-ui/Subheader';
import List from 'material-ui/List/List';

import UserLink from '../../components/UserLink'
import { dispatch } from '../../store'
import { requestUsers } from './thunks'
import { onMount, withSpinner } from '../../hocs'

const toUserLinks = map(user => <UserLink key={user.email} user={user} />)
const UserList = compose(toUserLinks, prop('users'))

const Users = ({ users = [] }) => (
  <List>
    <Subheader>Users</Subheader>
    <UserList users={users} />
  </List>
);

const onLoad = onMount(compose(dispatch, requestUsers))
const withProps = connect(({ users }) => ({ users }))
const withLoader = withSpinner(({ users }) => !users.length)

const enhance = compose(withProps, onLoad, withLoader)
export default enhance(Users)
