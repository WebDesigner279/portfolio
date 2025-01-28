import styled from "styled-components";

export const Avatar = styled.img`
  width: 100px; /* Largura do avatar */
  height: 100px; /* Altura do avatar */
  border-radius: 50%; /* Torna a imagem circular */
  object-fit: cover; /* Garante que a imagem se ajuste ao contêiner sem distorcer */
  border: 2px solid #ccc; /* Opcional: borda ao redor do avatar */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Opcional: adiciona uma sombra para estilo */
`;
