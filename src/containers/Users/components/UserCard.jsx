import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import withMotif from 'react-motif/withMotif'
import compose from 'ramda/src/compose'

import { Icon, Button, Flag, Card, Image } from 'semantic-ui-react'
import { toYear } from '../../../helpers/dates'
import toLower from 'mellotron/toLower'
import UserLink from './UserLink'

import { deleteUser } from '../store/thunks'

const stateProps = ({ users: { currentPage } }) => ({ currentPage })
const dispatchProps = dispatch => ({ deleteUser: compose(dispatch, deleteUser) })
const withProps = connect(stateProps, dispatchProps)

const enhance = compose(withProps, withMotif)

const UserCard = ({ user, currentPage, deleteUser, motif: { teal, violet, red } }) =>
  <Card raised role='group' tabIndex='-1'>
    <Card.Content>
      <Card.Header>
        {user.subject}
        <Image as={Icon} name='user' circular size='small' floated='right' color={ user.active ? teal : 'grey' } />
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
