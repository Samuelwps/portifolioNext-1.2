import { Container, Me, Links, About } from "./styled"

import {AiOutlineLinkedin} from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

export function AboutMe() {
  return (
    <Container id="about">
      <Me>
          <p>hi i'm</p>
          <h1>SAMUEL RIBEIRO</h1>
          <p>FRONT-END | DEVELOPER</p>
          <Links>
            <a href="https://www.linkedin.com/in/samuel-r-228093232" target="_blank"><AiOutlineLinkedin className="icons"/></a>
            <a href="https://www.github.com/Samuelwps" target="_blank"><FaGithub className="icons"/></a>
          </Links>
      </Me>
      <About>
        <h1>Expert on</h1>
        <p>Eu sou um desenvolvedor Front-End.
          Com o objetivo de ser Full Stack,
          atualmente desenvolvo aplicações web e mobile
          desde o layout até o código.
        </p>
      </About>
    </Container>
  )
}
