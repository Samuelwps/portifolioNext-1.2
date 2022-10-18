import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import {Headers} from "../components/Headers/index"
import { AboutMe } from "../components/About/index"
import { Projects } from "../components/Projects/index"
import { ContactMe } from "../components/ContactMe/index"
import { Footer } from './../components/Footer/index';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home | portfólio</title>
      </Head>
      <main>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
        <Footer/>
      </main>
    </Container>
  )
}

export default Home
