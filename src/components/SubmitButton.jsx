import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';

export default ({ pristine, submitting, label = 'Submit' }) =>
  <RaisedButton type="submit" label={label} primary={true} disabled={pristine || submitting} />
