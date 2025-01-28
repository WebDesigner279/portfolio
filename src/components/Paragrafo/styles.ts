import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
font-size: 12px;
color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#9b59b6')}
line-height: 22px;

`
