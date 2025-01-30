import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import React from 'react'
import Sobre from './containers/Sobre'
import Sidebar from './components/UserProfile/UserProfile'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <Sobre />
      </Container>
    </ThemeProvider>
  )
}

export default App
