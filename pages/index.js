import React, { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { HeaderTab } from '../src/components/HeaderTab'
import Nav from '../src/components/nav'
import { Hero, Title, Description, Row, Button } from '../src/styles/Home'
import { SPOTIFY_AUTHORIZE_ENDPOINT } from '../src/config'
import { useLocalStorage } from '../src/hooks/useLocalStorage'

const Home = () => {
  const [token, setToken] = useLocalStorage('token', '')

  useEffect(function () {
    const url = window.location.href
    if (url.indexOf('_token') > -1) {
      const urlToken = url.split('_token=')[1].split('&')[0].trim()
      setToken(urlToken)
    }
  }, [])

  const makeSpotifyProfileCall = event => {
    event.preventDefault()
    if (token === '') {
      document.location = SPOTIFY_AUTHORIZE_ENDPOINT
    } else {
      Router.push({
        pathname: '/dashboard',
        query: { token }
      })
    }
  }

  return (
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
          <Button onClick={makeSpotifyProfileCall}>{token !== '' ? 'Proceed to SPTIC' : 'Login'}</Button>
        </Row>
      </Hero>
    </div>
  )
}

export default Home
