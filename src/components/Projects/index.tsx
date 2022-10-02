import {
  SelectedWorks, Container,
  DivForWorks, ProjectsWorks,
  ButtonAco, DivCSS, Arrows, ListProjects,
  Title, DivDescription, ImgDiv, ListProjectsRev,
  ContentAco
} from "./styled"

import { useState } from 'react';

export function Projects() {

  const [content, setContent] = useState(false)

  return(
    <Container id="works">
      <DivForWorks>
        <SelectedWorks>
          <ProjectsWorks>
            <span>PROJECTS</span> <h4>Projetos Concluído</h4>
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
              <a href="/Cart"><img src="/images/chevrons-right.svg" />Visualizar projeto</a>
              <a href="https://carrinho-three.vercel.app" target="_blank"><img src="/images/chevrons-right.svg" />Deploy</a>
            </div>
          </DivDescription>
        </ListProjects>

        <ListProjectsRev>
          <DivDescription>
            <Title>
              <span>02</span>WatchMe
            </Title>
            <p>
              Projetos como meu treinamento em desenvolvimento Front-End com rocketseat-education
            </p>
            <div className="Arrow">
              <a href="/WatchMe"><img src="/images/chevrons-right.svg" />Visualizar projeto</a>
              <a href="https://01-movie.netlify.app" target="_blank"><img src="/images/chevrons-right.svg"/>Deploy</a>
            </div>
          </DivDescription>
          <ImgDiv>
            <img src="/images/watchMe.svg" id="DtmoneyIcon"/>
          </ImgDiv>
        </ListProjectsRev>

        <ListProjects>
          <ImgDiv>
            <img src="/images/dtmoneyIcon.svg" id="DtmoneyIcon"/>
          </ImgDiv>

          <DivDescription>
            <Title>
              <span>03</span>DT-Money
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
              <span>03</span>DT-Money
            </Title>
            <p>
              Um dos meus primeiros projetos
              como treinamento em desenvolvimento
              Front-End com rocketseat-education
            </p>
            <div className="Arrow">
              <a href="https://subtle-macaron-9e7b36.netlify.app" target="_blank"><img src="/images/chevrons-right.svg"/>Deploy</a>
            </div>
          </DivDescription>
          <ImgDiv>
            <img src="/images/TodoIcon.svg" alt="TodoIcon"/>
          </ImgDiv>
        </ListProjectsRev>

        <DivCSS>
          <ButtonAco onClick={() =>  content?(setContent(false)):(setContent(true))}>
            <Arrows content={content}>
            <a onClick={() =>  content?(setContent(false)):(setContent(true))}><img src="/images/chevrons-right.svg" /></a>
            </Arrows>
            <h4>Conceitos com CSS</h4>
          </ButtonAco>

          <ContentAco content={content}>
              <ListProjects>
                <ImgDiv>
                  <img src="/images/MenuIcon.svg" id="Menu" alt="Menu responsivo"/>
                </ImgDiv>

                <DivDescription>
                  <Title>
                    <span>01</span>Menu
                  </Title>
                  <div className="Arrow">
                    <a href="https://menu-flutuante.netlify.app"><img src="/images/chevrons-right.svg" />Deploy</a>
                  </div>
                </DivDescription>
              </ListProjects>
          </ContentAco>
        </DivCSS>

        </section>
      </DivForWorks>
    </Container>
    )
  }
