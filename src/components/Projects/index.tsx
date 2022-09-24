import {
  SelectedWorks, Container,
  DivForWorks, ProjectsWorks,
  ButtonAco, DivCSS, Arrows, ListProjects,
  Title, DivDescription, ImgDiv, ListProjectsRev
} from "./styled"

import WatchMe from "./../../images/watchMe.svg"
import Todo from "./../../images/TodoIcon.svg"
import Menu from "./../../images/MenuIcon.svg"

import { useState } from 'react';

export function Projects() {

  const [content, setContent] = useState(false)

  return(
    <Container id="works">
      <DivForWorks>
        <SelectedWorks>
          <ProjectsWorks>
            <p>PROJECTS</p>
            <h3>Projetos Concluído</h3>
          </ProjectsWorks>
        </SelectedWorks>
        <section>

        <ListProjects>
          <ImgDiv>
            <img src="/images/IconRocketShoes.svg" id="DtmoneyIcon"/>
          </ImgDiv>

          <DivDescription>
            <Title>
              <span>01</span>Cart
            </Title>
            <p>
              Um dos meus primeiros projetos
              como treinamento em desenvolvimento
              Front-End com rocketseat-education
            </p>
            <div className="Arrow">
              <a href="/DtMoney"><img src="/images/chevrons-right.svg" />Visualizar projeto</a>
            </div>
          </DivDescription>
        </ListProjects>

        <ListProjectsRev>
          <DivDescription>
            <Title>
              <span>01</span>Cart
            </Title>
            <p>
              Um dos meus primeiros projetos
              como treinamento em desenvolvimento
              Front-End com rocketseat-education
            </p>
            <div className="Arrow">
              <a href="/DtMoney"><img src="/images/chevrons-right.svg" />Visualizar projeto</a>
            </div>
          </DivDescription>
          <ImgDiv>
            <img src="/images/dtmoneyIcon.svg" id="DtmoneyIcon"/>
          </ImgDiv>
        </ListProjectsRev>

        <DivCSS>
          <ButtonAco onClick={() =>  content?(setContent(false)):(setContent(true))}>
            <Arrows content={content}>
            <a onClick={() =>  content?(setContent(false)):(setContent(true))}><img src="/images/chevrons-right.svg" /></a>
            </Arrows>
            <h4>Conceitos com CSS</h4>
          </ButtonAco>
        </DivCSS>

        </section>
      </DivForWorks>
    </Container>
    )
  }
