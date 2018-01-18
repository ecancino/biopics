import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import withMotif from 'react-motif/withMotif'
import compose from 'ramda/src/compose'

import { Button, Flag, Card } from 'semantic-ui-react'
import { toYear } from '../../../helpers/dates'
import toggleProp from '../helpers/toggleProp'
import toLower from 'mellotron/toLower'
import UserLink from './UserLink'

import { deleteUser, changeUser } from '../store/thunks'

const stateProps = ({ users: { currentPage } }) => ({ currentPage })
const dispatchProps = dispatch => ({
  deleteUser: compose(dispatch, deleteUser),
  changeUser: compose(dispatch, changeUser, toggleProp('active'))
})
const withProps = connect(stateProps, dispatchProps)

const enhance = compose(withProps, withMotif)

const UserCard = ({ user, currentPage, deleteUser, changeUser, motif: { teal, violet, red, grey } }) =>
  <Card raised={user.active} role='group' tabIndex='-1' color={ user.active ? teal : grey }>
    <Card.Content>
      <Card.Header>
        {user.subject}
        <Button icon='user' onClick={() => changeUser(user)} circular size='mini' floated='right' color={ user.active ? teal : grey } />
      </Card.Header>
      <Card.Description>
        <Flag name={toLower(user.country)} />
        {user.title} ({toYear(user.year_release)})
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group fluid>
        <UserLink color={violet} as={Link} to={`/user/${user.id}`} content='Edit' icon='write square' />
        <UserLink color={red} onClick={() => deleteUser(user.id, currentPage)} icon='delete' />
        <UserLink color={teal} href={user.site} target='_blank' icon='external square' />
      </Button.Group>
    </Card.Content>
  </Card>

export default enhance(UserCard)
