
import Head from 'next/head'

import React from 'react'
import {
    Container, ProjectHeader, DivContent,
    DivTitle, Title, DivImage,
    Projectcontent, DivSummaryCategory, DivSummaryHeader,
    DivImageSummary, ButtonGit

} from "../styles/pages/Carts"

import { FaGithub } from 'react-icons/fa'
import { GitButton } from '../components/gitButton/index';

const Cart: React.FC = () => {
    return(
        <Container>
          <Head>
            <link rel="icon" type="imagem/svg" href="/images/IconRocketShoes.svg"/>
            <title>Cart | portfólio</title>
          </Head>
          <main>
            <ProjectHeader>
                <DivContent>
                    <DivTitle>
                        <Title>
                            <div/>
                            <h4>Cart</h4>
                        </Title>
                        <p>
                            Um dos meus primeiros projetos
                            como treinamento em desenvolvimento
                            Front-End com rocketseat-education
                        </p>
                    </DivTitle>

                    <DivImage>
                        <img src="/images/pageCart/CartImage.png" alt="dtmoneyimage" />
                    </DivImage>
                </DivContent>
            </ProjectHeader>

            <Projectcontent>
                <DivSummaryHeader>
                    <h1>Home</h1>
                    <DivImageSummary>
                        <img src="/images/pageCart/HomeImage.png" alt="dtmoneyimage" />
                    </DivImageSummary>
                    <p>Na home desse projeto cada um dos itens são<br/>requisitados de uma API local e depois gerados</p>

                    <DivImageSummary>
                        <img src="/images/pageCart/requestImage.png" alt="dtmoneyimage" />
                    </DivImageSummary>

                    <DivImageSummary>
                        <img src="/images/pageCart/renderingProducts.png" alt="dtmoneyimage" />
                    </DivImageSummary>


                    <h1>Carrihno</h1>
                    <p><br/>Todas as interações do carrinho são armazenadas<br/>no localStorage com um Hook chamado useCart<br/>para serem usadas futuramente.</p>
                        <DivImageSummary>
                            <img src="/images/pageCart/cartProvider.png" alt="dtmoneyimage" />
                        </DivImageSummary>
                    <p>Dentre eles são:</p>
                    <DivImageSummary>
                        <img src="/images/pageCart/addProduct.png" alt="dtmoneyimage" />
                    </DivImageSummary>
                    <p>addProduct que vai ou adicionar um produto novo<br/>no carrinho ou se ja existir o produto que vai ser<br/>adicionado, ele é incrementado a quantidade que já<br/>está armazenado.</p>
                    <DivImageSummary>
                        <img src="/images/pageCart/UpdateProductAmount.png" alt="dtmoneyimage" />
                    </DivImageSummary>
                    <p>updateProductAmount que vai adicionar um mais<br/>um produto no carrihno ou remover</p>
                    <DivImageSummary>
                        <img src="/images/pageCart/RemoveProduct.png" alt="dtmoneyimage" />
                    </DivImageSummary>
                    <p>removeProduct que vai remover um produto do<br/>inteiro do carrinho.</p>

                    <GitButton link="https://github.com/Samuelwps/Carrinho" />

                    </DivSummaryHeader>
            </Projectcontent>
          </main>
        </Container>
    )
}

export default Cart
