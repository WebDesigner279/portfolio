import React from 'react'
import Sobre from './containers/Sobre'
import Sidebar from './components/UserProfile/UserProfile'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <Sobre />
      </Container>
    </>
  )
}

export default App
