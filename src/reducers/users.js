import { createReducer } from 'redux-act'
import compose from 'ramda/src/compose'
import path from 'ramda/src/path'
import map from 'ramda/src/map'
import { capitalize } from 'dbranes'

import { setUsers } from '../actions'

const toUser = (user) => ({
  id: user.id.value,
  firstname: capitalize(user.name.first),
  lastname: capitalize(user.name.last),
  avatar: user.picture.large,
  dob: user.dob,
  phone: user.phone,
  gender: user.gender,
  email: user.email,
  address: user.location,
  nationality: user.nat,
})

const reduceUsers = compose(map(toUser), path(['data', 'results']))

export default createReducer({
    [setUsers]: (state, response) => reduceUsers(response),
  },
  { users: [] }
)
