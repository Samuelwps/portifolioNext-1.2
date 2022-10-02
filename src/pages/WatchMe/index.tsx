import React from 'react'
import {
    ButtonGit,SectionWorks,ProjectHeader ,
    DivContent, DivTitle, Title,
    DivImage, Projectcontent, DivImageContent,
    DivProjectSideBar, DivP, ProjectContent,
    DivImageSidebar
 } from "./styled"

import Head from 'next/head'

import { FaGithub } from 'react-icons/fa'

const WatchMe: React.FC = () => {
    return(
        <>
        <SectionWorks>
          <Head>
            <link rel="icon" type="imagem/svg" href="/images/watchMe.svg"/>
            <title>WatchMe</title>
          </Head>

          <ProjectHeader>
              <DivContent>
                  <DivTitle>
                      <Title>
                          <div/>
                          <h4>WatchMe</h4>
                      </Title>
                      <p>
                          Projetos como meu treinamento em desenvolvimento Front-End com rocketseat-education
                      </p>
                  </DivTitle>

                  <DivImage>
                      <img src="/images/pageWatchMe/WatchMeImage.png" alt="dtmoneyimage" />
                  </DivImage>
              </DivContent>
          </ProjectHeader>

          <Projectcontent>
              <DivProjectSideBar>
                  <DivImageSidebar>
                      <img src="/images/pageWatchMe/SideBar.png" alt="SideBar"/>
                  </DivImageSidebar>
                  <DivP>
                      <Title>
                          <h4>SideBar</h4>
                      </Title>

                          <p>O principal desafio desse componente é o compartilhamento de estado já que é responsavel por controlar qual genero vai ser exibido no content</p>
                  </DivP>
              </DivProjectSideBar>
              <ProjectContent>
                  <Title>
                      <h4>Content</h4>
                  </Title>
                  <DivImageContent>
                      <img src="/images/pageWatchMe/Content.png" alt="Content"/>
                  </DivImageContent>
                  <p>Responsavel pela exibição do conteúdo atravez de uma requisição de uma api, usando como “norte” a SideBar para saber qual genero está selecionado</p>

                  <ButtonGit href="https://github.com/Samuelwps/01-Catalogo-de-filme">
                    <FaGithub/>
                    <p>View repository</p>
                  </ButtonGit>

              </ProjectContent>
          </Projectcontent>

        </SectionWorks>
        </>
    )
}

export default WatchMe
