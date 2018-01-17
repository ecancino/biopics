import React from 'react';
import { Link } from 'react-router'
import { Icon, Button, Flag, Card, Image } from 'semantic-ui-react'
import { toYear } from '../../../helpers/dates'
import toLower from 'mellotron/toLower'
import { theme } from '../../../hocs'
import UserLink from './UserLink'

const UserCard = ({ user, theme: { primaryColor, secondaryColor } }) =>
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
        <UserLink color={primaryColor} href={user.site} target='_blank' content='Site' icon='imdb' />
      </Button.Group>
    </Card.Content>
  </Card>

export default theme(UserCard)
