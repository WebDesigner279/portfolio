import styled from 'styled-components'
import { P } from '../Paragrafo/styles'

export const Avatar = styled.img`
  width: 100px; /* Largura do avatar */
  height: 100px; /* Altura do avatar */
  border-radius: 50%; /* Torna a imagem circular */
  object-fit: cover; /* Garante que a imagem se ajuste ao contêiner sem distorcer */
  border: 2px solid #ccc; /* Opcional: borda ao redor do avatar */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Opcional: adiciona uma sombra para estilo */
  margin-bottom: 24px;
`

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
