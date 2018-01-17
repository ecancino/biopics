import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import compose from 'ramda/src/compose'

import { Icon, Button, Flag, Card, Image } from 'semantic-ui-react'
import { toYear } from '../../../helpers/dates'
import toLower from 'mellotron/toLower'
import { withTheme } from '../../../hocs'
import UserLink from './UserLink'

import { deleteUser } from '../store/thunks'

const stateProps = ({ users: { currentPage } }) => ({ currentPage })
const dispatchProps = dispatch => ({ deleteUser: compose(dispatch, deleteUser) })
const withProps = connect(stateProps, dispatchProps)

const enhance = compose(withProps, withTheme)

const UserCard = ({ user, currentPage, deleteUser, theme: { primaryColor, secondaryColor, dangerColor } }) =>
  <Card raised role='group' tabIndex='-1'>
    <Card.Content>
      <Card.Header>
        {user.subject}
        <Image as={Icon} name='user' circular size='small' floated='right' color={ user.active ? primaryColor : 'grey' } />
      </Card.Header>
      <Card.Description>
        <Flag name={toLower(user.country)} />
        {user.title} ({toYear(user.year_release)})
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group fluid>
        <UserLink color={secondaryColor} as={Link} to={`/user/${user.id}`} content='Edit' icon='write square' />
        <UserLink color={dangerColor} onClick={() => deleteUser(user.id, currentPage)} icon='delete' />
        <UserLink color={primaryColor} href={user.site} target='_blank' icon='external square' />
      </Button.Group>
    </Card.Content>
  </Card>

export default enhance(UserCard)
