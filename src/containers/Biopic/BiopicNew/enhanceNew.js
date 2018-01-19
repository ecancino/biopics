import compose from 'ramda/src/compose'

import { getBiopicNew, createBiopic } from '../store/thunks'
import { onMount } from '../../../hocs'
import { withForm, withProps } from '../enhancers'

export default compose(withProps(createBiopic), withForm, onMount(getBiopicNew))
