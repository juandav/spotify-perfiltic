import React from 'react'
import Head from 'next/head'
import { HeaderTab } from '../src/components/HeaderTab'
import Nav from '../src/components/nav'
import { Hero, Title, Description, Row, Card } from '../src/styles/Home'

const Home = () => (
  <div>
    <Head>
      <HeaderTab name="Home" icon="cartoon" />
    </Head>

    <Nav />

    <Hero>
      <Title>Welcome to Next.js!</Title>
      <Description>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </Description>

      <Row>
        <Card href="https://nextjs.org/docs">
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </Card>
        <Card href="https://nextjs.org/learn">
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </Card>
        <Card href="https://github.com/zeit/next.js/tree/master/examples">
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </Card>
      </Row>
    </Hero>
  </div>
)

export default Home
