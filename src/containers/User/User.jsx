import React from 'react'
import { Field } from 'redux-form'

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

import enhance from './enhance'

const formatDate = input => input.value ? new Date(Date.parse(input.value)) : {}

const textField = ({ input, label }) => <TextField {...input} placeholder={label} floatingLabelText={label}  fullWidth={true} />

const datePicker = ({ input, label }) => <DatePicker {...input} value={formatDate(input)} placeholder={label} floatingLabelText={label} fullWidth={true} />

const selectField = ({ input, label, type, items, meta: { touched, error } }) => <SelectField {...input} floatingLabelText={label} fullWidth={true}>
  {items.map(item => <MenuItem key={item} value={item} primaryText={item} />)}
</SelectField>

const User = ({ handleSubmit, pristine, reset, submitting, saveUser }) => (
  <form onSubmit={handleSubmit(saveUser)}>
    <div>
      <Field name="title" component={textField} type="text" label="Title" />
    </div>
    <div>
      <Field name="subject" component={textField} type="text"  label="Subject"/>
    </div>
    <div>
      <Field name="director" component={textField} type="text" label="Director" />
    </div>
    <div>
      <Field name="year_release" component={datePicker} type="text" label="Release" />
    </div>
    <div>
      <Field name="type" component={selectField} items={['Criminal', 'Academic']} type="text" label="Type" />
    </div>
    <div>
      <Field name="country" component={selectField} items={['UK', 'US']} type="text" label="Country" />
    </div>
    <div>
      <Field name="lead_actor" component={textField} type="text" label="Lead" />
    </div>
    <div>
      <Field name="site" component={textField} type="text" label="Site" />
    </div>
    <div>
      <RaisedButton type="button" label="Reset" secondary={true} disabled={pristine || submitting} onClick={reset} />
      <RaisedButton type="submit" label="Submit" primary={true} disabled={pristine || submitting} />
    </div>
  </form>
)

export default enhance(User)
