import compose from 'ramda/src/compose'

import { getBiopicFromId, updateBiopic } from '../store/thunks'
import { onMount } from '../../../hocs'
import { withForm, withProps, withLoader } from '../enhancers'

export default compose(withProps(updateBiopic), withForm, onMount(getBiopicFromId), withLoader)
