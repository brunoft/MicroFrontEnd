import React from 'react'

import SideMenu from '../Components/SideMenu'
import { Container, Content} from './styles'
// GlobalStyle
import { GlobalStyle } from '../Components/GlobalStyle'

const App: React.FC = ({ children }) => (
  <>
  <Container>
    <SideMenu />
    <Content>
      {children}
    </Content>
  </Container>
  <GlobalStyle />
  </>
)

export default App
