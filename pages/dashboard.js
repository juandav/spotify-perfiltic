import React from 'react'
import Head from 'next/head'
import { HeaderTab } from '../src/components/HeaderTab'
import Nav from '../src/components/Nav'
import { Background, Player, ControlsCointainer } from '../src/styles/Dashboard'
import { Screen } from '../src/components/Screen'
import Tracks from '../src/components/Screen/Tracks'
import Controls from '../src/components/Screen/Controls'

const Dashboard = () => (
  <Background>
    <Head>
      <HeaderTab name='Home' icon='cartoon' />
    </Head>
    <Nav />
    <Player>
      <Screen>
        <Tracks />
      </Screen>
      <ControlsCointainer>
        <Controls />
      </ControlsCointainer>
    </Player>
  </Background>
)

export default Dashboard
