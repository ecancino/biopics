import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';

export default ({ pristine, submitting, reset, label = 'Reset' }) =>
  <RaisedButton type="button" label={label} secondary={true} disabled={pristine || submitting} onClick={reset} />
