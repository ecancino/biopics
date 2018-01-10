import React from 'react'

import TextField from 'material-ui/TextField';

export default ({ input, label }) =>
  <TextField {...input} floatingLabelText={label} fullWidth={true} />
