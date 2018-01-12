import React from 'react';
import { Link } from 'react-router'
import { Icon, Button, Flag, Card, Image } from 'semantic-ui-react'
import { toYear } from '../../../helpers/dates'
import toLower from 'mellotron/toLower'

const UserLink = ({ user }) =>
  <Card raised>
    <Card.Content>
      <Card.Header>
        {user.subject}
        <Image as={Icon} name='user' circular size='small' floated='right' color={ user.active ? 'violet' : 'grey' } />
      </Card.Header>
      <Card.Description>
        <Flag name={toLower(user.country)} />
        {user.title} ({toYear(user.year_release)})
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group fluid>
        <Button compact size='small' color='violet' as={Link} to={`/user/${user.id}`} content='Edit' icon='write square' />
        <Button compact basic size='small' color='violet' as='a' href={user.site} target='_blank' content='Site' icon='imdb' />
      </Button.Group>
    </Card.Content>
  </Card>

export default UserLink
