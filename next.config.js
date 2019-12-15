require('dotenv').config()
module.exports = {
  env: {
    APPLICATION_ENVIRONMENT: process.env.NODE_ENV,
    SPOTIFY_KEY: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_SCOPES: process.env.SPOTIFY_SCOPES
  }
}
