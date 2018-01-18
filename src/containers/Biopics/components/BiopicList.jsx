import React from 'react';
import compose from 'ramda/src/compose'
import map from 'ramda/src/map'
import prop from 'ramda/src/prop'

import BiopicCard from './BiopicCard/BiopicCard'

const toBiopicLinks = map(biopic => <BiopicCard key={biopic.id} user={biopic} />)
const BiopicList = compose(toBiopicLinks, prop('biopics'))

export default BiopicList
