import React from 'react'
import Head from 'next/head'
import { HeaderTab } from '../src/components/HeaderTab'
import Nav from '../src/components/Nav'
import { Background, PlayerContainer, Card, Controls } from '../src/styles/Dashboard'

const Dashboard = () => (
  <Background>
    <Head>
      <HeaderTab name='Home' icon='cartoon' />
    </Head>
    <Nav />
    <PlayerContainer>
      <Card>
        <h1>dada</h1>
      </Card>
      <Controls>
        <h6>controls</h6>
      </Controls>
    </PlayerContainer>
  </Background>
)

// Dashboard.getInitialProps = async function () { }

export default Dashboard
