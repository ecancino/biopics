import React from 'react'
import { Field } from 'redux-form'

import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import enhance from './enhance'

const User = ({ handleSubmit, pristine, reset, submitting, saveUser }) => (
  <form onSubmit={handleSubmit(saveUser)}>
    <div>
      <label htmlFor="title">Title</label>
      <Field name="title" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="subject">Subject</label>
      <Field name="subject" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="director">Director</label>
      <Field name="director" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="year_release">Release</label>
      <Field name="year_release" component={DatePicker} type="text" />
    </div>
    <div>
      <label htmlFor="type">Type</label>
      <Field name="type" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="country">Country</label>
      <Field name="country" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="site">Site</label>
      <Field name="site" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="lead_actor">Lead</label>
      <Field name="lead_actor" component="input" type="text" />
    </div>
    <div>
      <RaisedButton type="submit" label="Submit" primary={true} disabled={pristine || submitting} />
      <RaisedButton type="button" label="Undo Changes" secondary={true} disabled={pristine || submitting} onClick={reset} />
    </div>
  </form>
)

export default enhance(User)
