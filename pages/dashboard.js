import React from 'react'
import Head from 'next/head'
import { HeaderTab } from '../src/components/HeaderTab'
import Nav from '../src/components/Nav'
import { Background, Player, Controls } from '../src/styles/Dashboard'
import { Screen } from '../src/components/Screen'

const Dashboard = () => (
  <Background>
    <Head>
      <HeaderTab name='Home' icon='cartoon' />
    </Head>
    <Nav />
    <Player>
      <Screen>
        <h2>mkmkmkmkmkmkmmmkk</h2>
      </Screen>
      <Controls>
        <h1>controls</h1>
      </Controls>
    </Player>
  </Background>
)

export default Dashboard
