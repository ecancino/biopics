import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'
import { Form, Button, Icon, Divider } from 'semantic-ui-react'

import TextField from '../../components/TextField';
import SelectField from '../../components/SelectField';
import DatePicker from '../../components/DatePicker';
import Check from '../../components/Check';

import enhance from './enhance'

const User = ({ handleSubmit, pristine, reset, submitting, countries, types, saveBiopic }) => (
  <Form onSubmit={handleSubmit(saveBiopic)}>
    <Link to='/users'>
      <Icon name='chevron left' size='small' />
      Back
    </Link>
    <Divider />
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='title'>Title</label>
        <Field name='title' id='form-input-control-title' component={TextField} placeholder='Title' icon='header' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='subject'>Subject</label>
        <Field name='subject' component={TextField} placeholder='Subject' icon='user' />
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='director'>Director</label>
        <Field name='director' component={TextField} placeholder='Director' icon='film' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='year_release'>Release</label>
        <Field name='year_release' component={DatePicker} type='text' placeholder='Release' icon='calendar' />
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='type'>Type</label>
        <Field name='type' component={SelectField} options={types} placeholder='Type' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='country'>Country</label>
        <Field name='country' component={SelectField} options={countries} placeholder='Country' />
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='lead_actor'>Lead</label>
        <Field name='lead_actor' component={TextField} placeholder='Lead' icon='star' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='site'>Site</label>
        <Field name='site' component={TextField} placeholder='Site' icon='chrome' />
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='active'>Active</label>
        <Field name='active' component={Check} toggle format={Boolean} placeholder='Active' />
      </Form.Field>
      <Form.Field>
        <Button type='submit' primary icon='save' content='Save' disabled={pristine || submitting} floated='right' tabIndex={-1} />
        <Button type='button' icon='undo' content='Reset' onClick={reset} disabled={pristine || submitting} floated='right' tabIndex={-1} />
      </Form.Field>
    </Form.Group>
  </Form>
)

export default enhance(User)
