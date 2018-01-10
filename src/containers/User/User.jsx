import React from 'react'
import { Field } from 'redux-form'

import TextField from '../../components/TextField';
import SelectField from '../../components/SelectField';
import DatePicker from '../../components/DatePicker';
import ResetButton from '../../components/ResetButton';
import SubmitButton from '../../components/SubmitButton';

import enhance from './enhance'

const User = ({ handleSubmit, pristine, reset, submitting, saveUser }) => (
  <form onSubmit={handleSubmit(saveUser)}>
    <div>
      <Field name="title" component={TextField} type="text" label="Title" />
    </div>
    <div>
      <Field name="subject" component={TextField} type="text"  label="Subject"/>
    </div>
    <div>
      <Field name="director" component={TextField} type="text" label="Director" />
    </div>
    <div>
      <Field name="year_release" component={DatePicker} type="text" label="Release" />
    </div>
    <div>
      <Field name="type" component={SelectField} items={['Criminal', 'Academic']} type="text" label="Type" />
    </div>
    <div>
      <Field name="country" component={SelectField} items={['UK', 'US']} type="text" label="Country" />
    </div>
    <div>
      <Field name="lead_actor" component={TextField} type="text" label="Lead" />
    </div>
    <div>
      <Field name="site" component={TextField} type="text" label="Site" />
    </div>
    <div>
      <ResetButton pristine={pristine} submitting={submitting} reset={reset} />
      &nbsp;
      <SubmitButton pristine={pristine} submitting={submitting} />
    </div>
  </form>
)

export default enhance(User)
