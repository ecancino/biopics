import React from 'react'
import map from 'ramda/src/map'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default ({ input, label, type, items, meta: { touched, error } }) =>
  <SelectField {...input} floatingLabelText={label} fullWidth={true} errorText={touched && error} onChange={(event, index, value) => input.onChange(value)}>
    {map(item => <MenuItem key={item} value={item} primaryText={item} />, items)}
  </SelectField>
