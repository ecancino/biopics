import React from 'react';
import { Link } from 'react-router'

import { Button, Flag, Card, Icon, Popup } from 'semantic-ui-react'
import { toYear } from '../../../../helpers/dates'
import toLower from 'mellotron/toLower'
import BiopicLink from '../BiopicLink'

import enhance from './enhance'

const BiopicCard = ({ biopic, currentPage, removeBiopic, changeBiopic, motif: { teal, violet, red, activeColor } }) =>
  <Card raised={biopic.active} role='group' tabIndex='-1' color={activeColor(biopic.active)}>
    <Card.Content>
      <Card.Header>
        <Popup size='mini' trigger={<Icon size='small' name='user' />} content={biopic.type} />
        {biopic.subject}
        <Button icon='film' onClick={() => changeBiopic(biopic)} circular size='mini' floated='right' color={activeColor(biopic.active)} />
      </Card.Header>
      <Card.Description>
        <Flag name={toLower(biopic.country)} />
        {biopic.title} ({toYear(biopic.year_release)})
      </Card.Description>
      <Card.Description>
        <Icon name='star' />
        {biopic.lead_actor}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group fluid>
        <BiopicLink color={violet} as={Link} to={`/biopic/${biopic.id}`} icon='write' />
        <BiopicLink color={red} onClick={() => removeBiopic(biopic.id, currentPage)} icon='delete' />
        <BiopicLink color={teal} href={biopic.site} target='_blank' icon='external' />
      </Button.Group>
    </Card.Content>
  </Card>

export default enhance(BiopicCard)
