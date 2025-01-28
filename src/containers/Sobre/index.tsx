import styled from 'styled-components'

import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import React from 'react'
import { GithubSecao } from './styles'

const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem id
      modi enim sit dolores numquam pariatur perspiciatis aliquam cupiditate!
      Explicabo doloribus debitis soluta odit commodi. Debitis mollitia culpa
      saepe nobis!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=webdesigner279&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=webdesigner279&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>

    <h1 className='TituloProjeto'>Projetos</h1>
    <ul>
      <li>
        <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo='secundario'>Lista de tarefas com VueJS</Paragrafo>
        <a className='btnEnviar' href="">Visualizar</a>
        </Card>
      </li>
      <li>
        <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo='secundario'>Lista de tarefas com VueJS</Paragrafo>
        <a className='btnEnviar' href="">Visualizar</a>
        </Card>
      </li>
      <li>
        <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo='secundario'>Lista de tarefas com VueJS</Paragrafo>
        <a className='btnEnviar' href="">Visualizar</a>
        </Card>
      </li>
      <li>
        <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo='secundario'>Lista de tarefas com VueJS</Paragrafo>
        <a className='btnEnviar' href="">Visualizar</a>
        </Card>
      </li>
      <li>
        <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo='secundario'>Lista de tarefas com VueJS</Paragrafo>
        <a className='btnEnviar' href="">Visualizar</a>
        </Card>
      </li>
      <li>
        <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo='secundario'>Lista de tarefas com VueJS</Paragrafo>
        <a className='btnEnviar' href="">Visualizar</a>
        </Card>
      </li>
      <li>
        <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo='secundario'>Lista de tarefas com VueJS</Paragrafo>
        <a className='btnEnviar' href="">Visualizar</a>
        </Card>
      </li>
      <li>
        <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo='secundario'>Lista de tarefas com VueJS</Paragrafo>
        <a className='btnEnviar' href="">Visualizar</a>
        </Card>
      </li>
    </ul>
  </section>
)
export default Sobre
