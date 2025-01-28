import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import React from 'react'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem id
      modi enim sit dolores numquam pariatur perspiciatis aliquam cupiditate!
      Explicabo doloribus debitis soluta odit commodi. Debitis mollitia culpa
      saepe nobis!

    </Paragrafo>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=webdesigner279&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=webdesigner279&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>

    <h1>Projetos</h1>
  </section>
)
export default Sobre
