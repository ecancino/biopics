import compose from 'ramda/src/compose'
import path from 'ramda/src/path'
import map from 'ramda/src/map'
import capitalize from 'mellotron/capitalize'

export const toUser = (user) => ({
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

export default compose(map(toUser), path(['data', 'results']))
