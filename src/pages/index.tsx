import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import {Headers} from "../components/Headers/index"
import {AboutMe} from "../components/About/index"
import {Projects} from "../components/Projects/index"
import {ContactMe} from "../components/ContactMe/index"

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <Headers/>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
      </main>
    </Container>
  )
}

export default Home
