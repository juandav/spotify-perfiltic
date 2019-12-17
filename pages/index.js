import React from 'react'
import Head from 'next/head'
import { HeaderTab } from '../src/components/HeaderTab'
import Nav from '../src/components/nav'
import { Hero, Title, Description, Row, Button } from '../src/styles/Home'

const Home = () => (
  <div>
    <Head>
      <HeaderTab name='Home' icon='cartoon' />
    </Head>

    <Nav />

    <Hero>
      <Title>Welcome to SPTIC!</Title>
      <Description>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </Description>

      <Row>
        <Button>Login</Button>
      </Row>
    </Hero>
  </div>
)

export default Home
