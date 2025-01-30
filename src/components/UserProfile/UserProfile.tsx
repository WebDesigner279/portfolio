import React from 'react'
import { Avatar } from './styles'
import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const UserProfile: React.FC = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar
          src="https://github.com/webdesigner279.png"
          alt="Avatar do usuário"
        />
        <Titulo fontSize={20}>Valter Vieira</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          webdesigner279
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro front-end
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default UserProfile
