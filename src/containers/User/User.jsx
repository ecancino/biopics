import React from 'react'
import { Field } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'

import TextField from '../../components/TextField';
import SelectField from '../../components/SelectField';
import DatePicker from '../../components/DatePicker';

import enhance from './enhance'

const User = ({ handleSubmit, pristine, reset, submitting, countries, types, saveUser }) => (
  <Form onSubmit={handleSubmit(saveUser)}>
    <Form.Field width={8}>
      <label htmlFor="title">Title</label>
      <Field name="title" id='form-input-control-title' component={TextField} placeholder="Title" />
    </Form.Field>
    <Form.Field width={8}>
      <label htmlFor="subject">Subject</label>
      <Field name="subject" component={TextField} placeholder="Subject"/>
    </Form.Field>
    <Form.Field width={8}>
      <label htmlFor="director">Director</label>
      <Field name="director" component={TextField} placeholder="Director" />
    </Form.Field>
    <Form.Field width={8}>
      <label htmlFor="year_release">Release</label>
      <Field name="year_release" component={DatePicker} type="text" placeholder="Release" width={8} />
    </Form.Field>
    <Form.Field width={8}>
      <label htmlFor="type">Type</label>
      <Field name="type" component={SelectField} options={types} placeholder="Type" />
    </Form.Field>
    <Form.Field width={8}>
      <label htmlFor="country">Country</label>
      <Field name="country" component={SelectField} options={countries} textField='name' valueField='id' placeholder="Country" />
    </Form.Field>
    <Form.Field width={8}>
      <label htmlFor="lead_actor">Lead</label>
      <Field name="lead_actor" component={TextField} placeholder="Lead" />
    </Form.Field>
    <Form.Field width={8}>
      <label htmlFor="site">Site</label>
      <Field name="site" component={TextField} placeholder="Site" />
    </Form.Field>
    <Form.Field width={8}>
      <Button type='submit' floated="right" disabled={pristine || submitting}  tabIndex={-1} positive>Save</Button>
      <Button type='button' floated="right" disabled={pristine || submitting} onClick={reset} tabIndex={-1}>Reset</Button>
    </Form.Field>
  </Form>
)

export default enhance(User)
