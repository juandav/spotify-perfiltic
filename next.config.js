require('dotenv').config({ path: '.env.build' })

module.exports = {
  env: {
    APP_ENVIRONMENT: process.env.NODE_ENV,
    SPOTIFY_KEY: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_SCOPES: process.env.SPOTIFY_SCOPES,
    URL_AUTH_REDIRECT: process.env.URL_AUTH_REDIRECT
  }
}
