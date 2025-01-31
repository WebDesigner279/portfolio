import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  list-style: none;
}

body {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${(props) => (props.theme as Theme).corDeFundo};

  @media (max-width: 768px) {
  padding-top: 16px;
  }
}
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  .TituloProjeto,
  h1 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .btnEnviar {
    color: ${(props) => props.theme.corDeFundo};
    font-size: 14px;
    background-color: ${(props) => props.theme.corDeFundoBotao};
    text-decoration: none;
    padding: 8px;
    display: inline-block;
    margin-top: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 36px;
    row-gap: 40px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 16px;
    }
  }
`
