import styled from 'styled-components';
import { Props } from '.';

export const P = styled.p<Props>`
  font-size: 12px;
  color: ${(props) => (props.tipo === 'principal' ? '#000' : '#7f8c8d')};
  line-height: 22px;
`;
