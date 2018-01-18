import { createReducer } from 'redux-act'

import { setBiopic, setCountries, setTypes } from './actions'
import mergeProp from '../../../helpers/mergeProp'

export default createReducer({
  [setBiopic]: mergeProp('biopic'),
  [setCountries]: mergeProp('countries'),
  [setTypes]: mergeProp('types'),
}, { biopic: {}, countries: [], types: [] })
