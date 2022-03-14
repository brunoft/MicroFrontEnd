import React from 'react'

import App from '../layouts/App'
import Parcel from 'single-spa-react/parcel'

const Consig = () => (
  <App>
   <Parcel
        config={() => System.import('@mfe/react-consig')}
      />
  </App>
)

export default Consig