require('dotenv').config({ path: '.env.build' })
// const withCSS = require('@zeit/next-css')

module.exports = {
  env: {
    APP_ENVIRONMENT: process.env.NODE_ENV,
    SPOTIFY_KEY: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_SCOPES: process.env.SPOTIFY_SCOPES,
    URL_AUTH_REDIRECT: process.env.URL_AUTH_REDIRECT
  }
}

/*
module.exports = withCSS({
  cssModules: true,
  webpack: function (config) {
    return config
  },
  env: {
    APP_ENVIRONMENT: process.env.NODE_ENV,
    SPOTIFY_KEY: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_SCOPES: process.env.SPOTIFY_SCOPES,
    URL_AUTH_REDIRECT: process.env.URL_AUTH_REDIRECT
  }
})
*/
