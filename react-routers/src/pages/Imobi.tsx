import React from 'react'

import App from '../layouts/App'
import Parcel from 'single-spa-react/parcel'

const Imobi = () => (
  <App>
    <Parcel
        config={() => System.import('@mfe/react-imobiliario')}
      />
  </App>

)

export default Imobi