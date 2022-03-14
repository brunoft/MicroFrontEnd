import React from 'react'
import {Link  } from 'react-router-dom'
import { Container } from '../Components/styles'

const SideMenu = () => (
  <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/consignado">Consig</Link>
          </li>
          <li>
            <Link to="/imobiliario">Imobiliário</Link>
          </li>
        </ul>
      </nav>
  </Container>
)

export default SideMenu