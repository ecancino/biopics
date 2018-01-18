import React from 'react';
import { Link } from 'react-router'

import { Button, Flag, Card, Icon, Popup } from 'semantic-ui-react'
import { toYear } from '../../../../helpers/dates'
import toLower from 'mellotron/toLower'
import UserLink from '../UserLink'

import enhance from './enhance'

const UserCard = ({ user, currentPage, removeBiopic, changeBiopic, motif: { teal, violet, red, activeColor } }) =>
  <Card raised={user.active} role='group' tabIndex='-1' color={activeColor(user.active)}>
    <Card.Content>
      <Card.Header>
        <Popup size='mini' trigger={<Icon size='small' name='bookmark' />} content={user.type} />
        {user.subject}
        <Button icon='user' onClick={() => changeBiopic(user)} circular size='mini' floated='right' color={activeColor(user.active)} />
      </Card.Header>
      <Card.Description>
        <Flag name={toLower(user.country)} />
        {user.title} ({toYear(user.year_release)})
      </Card.Description>
      <Card.Description>
        <Icon name='star' />
        {user.lead_actor}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group fluid>
        <UserLink color={violet} as={Link} to={`/biopic/${user.id}`} icon='write' />
        <UserLink color={red} onClick={() => removeBiopic(user.id, currentPage)} icon='delete' />
        <UserLink color={teal} href={user.site} target='_blank' icon='external' />
      </Button.Group>
    </Card.Content>
  </Card>

export default enhance(UserCard)
