import React from 'react'

import {
  ButtonGit, DivSummaryHeader, DivSummaryCategory,
  DivImageSummaryCategory, ProjectHeader, SectionWorks,
  DivImageSummary, DivContent, DivTitle,
  Title, DivImage, ProjectContent
} from "../styles/pages/DtMoney"

import Head from 'next/head'

import { FaGithub } from 'react-icons/fa'
import { GitButton } from '../components/gitButton'

const DtMoney: React.FC = () => {
  return(
    <>
    <SectionWorks>
      <Head>
        <link rel="icon" type="imagem/svg" href="/images/dtmoneyIcon.svg"/>
        <title>DT-Money | portfólio</title>
      </Head>
      <main>
        <ProjectHeader>
          <DivContent>
            <DivTitle>
            <Title>
              <div/>
              <h4>DT-Money</h4>
            </Title>
          <p>
          Um dos meus primeiros projetos
          como treinamento em desenvolvimento
          Front-End com rocketseat-education
          </p>
          </DivTitle>

          <DivImage>
            <img src="/images/pageDT-Money/dtmoneyimage.png" alt="dtmoneyimage" />
          </DivImage>
          </DivContent>
        </ProjectHeader>

        <ProjectContent>
          <DivSummaryCategory>
            <DivSummaryHeader>
              <DivImageSummary><h1>Summary</h1>
                <img src="/images/pageDT-Money/dtmoneySummary.png" alt="dtmoneyimage" />
              </DivImageSummary>
              <p>Cada uma das categorias do Summary mostra o registro das transações</p>
            </DivSummaryHeader>
            </DivSummaryCategory>

            <DivSummaryCategory>
              <DivImageSummaryCategory>
                <img src="/images/pageDT-Money/dtmoneySummaryCategory.png" alt="dtmoneyimage" />
              </DivImageSummaryCategory>
              <div>
                <p className="space">Se é feito uma ação do tipo deposit, esse valor é adicionado nessa categoria e no total.</p>
                <p className="space">O mesmo acontece com as ações do tipo withdraw, ela é somada a categoria de saída mas diferente da anterior ela é “descontada”do total.</p>
              </div>
            </DivSummaryCategory>
            <DivSummaryCategory>
              <DivImageSummary>
                <img src="/images/pageDT-Money/dtmoneySummaryCategoryTransactions.png" alt="Transações"/>
              </DivImageSummary>
              </DivSummaryCategory>
            <DivSummaryCategory>
              <DivImageSummaryCategory>
                <img src="/images/pageDT-Money/dtmoneySummaryApi.png" alt="dtmoneyimageApi" />
              </DivImageSummaryCategory>
              <div>
                <p className="space">Nesse pojeto também foi utilizado o MirajeJs para simular uma api, para que assim o Front-end fosse desenvolvido sem um back-end.</p>
              </div>
            </DivSummaryCategory>
            <DivSummaryCategory>
              <DivImageSummaryCategory>
                <img src="/images/pageDT-Money/dtmoneySummaryModal.png" alt="dtmoneyimageApi" />
              </DivImageSummaryCategory>
              <div>
                <p className="space">Com o react-modal é passado todos os valores e expecificações da transação e é criado uma nova transaction.</p>
              </div>
            </DivSummaryCategory>
            <DivSummaryCategory>
              <DivSummaryHeader>
              <DivImageSummary>
                <img src="/images/pageDT-Money/dtmoneySummaryExibion.png" alt="dtmoneySummaryExibion" />
              </DivImageSummary>
                <p>Logo após ser criado uma nova transação, o array é renderizado e é exibido o novo valor adicionado.</p>
              </DivSummaryHeader>
          </DivSummaryCategory>

          <GitButton link="https://github.com/Samuelwps/dt-money"/>

        </ProjectContent>
      </main>
    </SectionWorks>
    </>
    )
  }

  export default DtMoney
