import {
  SelectedWorks, Container,
  DivForWorks, ProjectsWorks,
  ButtonAco, DivCSS, Arrows, ListProjects,
  Title, DivDescription, ImgDiv, ListProjectsRev,
  ContentAco
} from "./styled"

import { useState } from 'react';

import {  HiOutlineViewList} from 'react-icons/hi'
import {BiLinkExternal } from "react-icons/bi"

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
              Trilia ReactJs Ignite<br/>Desafio 01 - Criando um hook de carrinho de compras.
            </p>
            <div className="Arrow">
              <a href="/Cart"><HiOutlineViewList className="iconsProj"/></a>
              <a href="https://carrinho-three.vercel.app" target="_blank"><BiLinkExternal className="iconsProj"/></a>
            </div>
          </DivDescription>
        </ListProjects>

        <ListProjectsRev>
          <DivDescription>
            <Title>
              <span>02</span>WatchMe
            </Title>
            <p>
              Trilia ReactJs Ignite<br/>Desafio 02 - Componentizando a aplicação.
            </p>
            <div className="Arrow">
              <a href="/WatchMe"><HiOutlineViewList className="iconsProj"/></a>
              <a href="https://01-movie.netlify.app" target="_blank"><BiLinkExternal className="iconsProj"/></a>
            </div>
          </DivDescription>
          <ImgDiv>
            <img src="/images/watchMe.svg" id="DtmoneyIcon"/>
          </ImgDiv>
        </ListProjectsRev>

        <ListProjects>
          <ImgDiv>
            <img src="/images/iconSpaceTraviling.svg" id="DtmoneyIcon"/>
          </ImgDiv>

          <DivDescription>
            <Title>
              <span>03</span>Space-Traviling
            </Title>
            <p>
              Trilia ReactJs Ignite<br/>Desafio 03 - Criando um projeto do zero
            </p>
            <div className="Arrow">
              <a href="https://projeto-do-zero.vercel.app/" target="_blank"><BiLinkExternal className="iconsProj"/></a>
            </div>
          </DivDescription>
        </ListProjects>

        <ListProjectsRev>
          <DivDescription>
            <Title>
              <span>04</span>To-do
            </Title>
            <p>
              Trilia ReactJs Ignite<br/>Desafio 04 - Conceitos do React.
            </p>
            <div className="Arrow">
              <a href="https://subtle-macaron-9e7b36.netlify.app" target="_blank"><BiLinkExternal className="iconsProj"/></a>
            </div>
          </DivDescription>
          <ImgDiv>
            <img src="/images/TodoIcon.svg" alt="TodoIcon"/>
          </ImgDiv>
        </ListProjectsRev>

        <ListProjects>
          <ImgDiv>
            <img src="/images/dtmoneyIcon.svg" id="DtmoneyIcon"/>
          </ImgDiv>

          <DivDescription>
            <Title>
              <span>05</span>DT-Money
            </Title>
            <p>
              Um dos meus primeiros projetos como treinamento em desenvolvimento Front-End com rocketseat-education
            </p>
            <div className="Arrow">
              <a href="/DtMoney"><HiOutlineViewList className="iconsProj"/></a>
            </div>
          </DivDescription>
        </ListProjects>

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
                    <a href="https://menu-flutuante.netlify.app"><BiLinkExternal className="iconsProj"/></a>
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
