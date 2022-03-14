import React from 'react'
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom'

import Home from '../pages/Home'
import Consig from '../pages/Consig'
import Imobi from '../pages/Imobi'


const Routes: React.FC = () => {

  return (
    <div>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact  path="/" component={Home}/>
          <Route exact  path="/consignado" component={Consig}/>
          <Route exact  path="/imobiliario" component={Imobi}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes