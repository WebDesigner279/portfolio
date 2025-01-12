// Importa a biblioteca 'styled-components', que permite criar componentes com estilos personalizados em JavaScript
import styled from 'styled-components'

// Define um componente estilizado chamado 'BotaoP' usando a função 'styled.button'.
// Esse componente será um botão HTML com um estilo básico de fundo verde.
const BotaoP = styled.button`
  background-color: green; /* Define a cor de fundo do botão como verde */
  font-size: ${(props) =>
    props.fontSize ||
    '16px'}; /* Aplica o tamanho de fonte com base na propriedade */
`

const BotaoS = styled.button`
  background-color: blue; /* Define a cor de fundo do botão como azul */
  font-size: ${(props) =>
    props.fontSize ||
    '16px'}; /* Aplica o tamanho de fonte com base na propriedade */
`

const BotaoT = styled.button`
  background-color: red; /* Define a cor de fundo do botão como azul */
  color: #fff;
  font-size: ${(props) =>
    props.fontSize ||
    '16px'}; /* Aplica o tamanho de fonte com base na propriedade */

  span {
    text-decoration: line-through;
  }
`

// Define um componente funcional React chamado 'Teste'.
// Esse componente renderiza os botões estilizados criados anteriormente.
function Teste() {
  return (
    // Aqui, os dois botões são envoltos em uma 'div' para garantir que ambos sejam renderizados.
    <div>
      <BotaoP fontSize="18px">Enviar</BotaoP>
      <BotaoS fontSize="14px">Cancelar</BotaoS>
      <BotaoT as="a" fontSize="24px">
        <span>Perigo</span>
      </BotaoT>
    </div>
  )
}
// Exporta o componente 'Teste' como padrão, para que possa ser importado e utilizado em outros arquivos.
export default Teste
