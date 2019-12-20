import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { ThemeProvider } from 'styled-components'
import makeStore from '../src/store/make-store'
import { GlobalStyle } from '../src/styles/GlobalStyles'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

class SPTICApp extends App {
  render () {
    const { Component, pageProps, store } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}

export default withRedux(makeStore, { debug: false })(SPTICApp)
