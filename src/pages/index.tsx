import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import {AboutMe} from "../components/About/index"
import {Projects} from "../components/Projects/index"

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <AboutMe/>
        <Projects/>
      </main>
    </Container>
  )
}

export default Home
