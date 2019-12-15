<p align="center">
  <a href="https://juandav.github.io/" target="blank"><img src="https://svgshare.com/i/Goi.svg" width="180" alt="SPTIC Logo" /></a>
</p>
<p align="center">A challenge made for <a href="http://www.perfiltic.com/" target="_blank">PerfilTIC</a></p>

## Description

SPTIC is a challenge for the "ProfileTIC" company.

## Environments
Create file .env.build and add:

| KEY               | VALUE                                                                                                                                          |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| SPOTIFY_SCOPES    | user-read-private+user-read-email+playlist-read-private+user-top-read+user-read-recently-played+playlist-modify-public+playlist-modify-private |
| SPOTIFY_CLIENT_ID | SPOTIFY_CLIENT_ID                                                                                                                                               |
| URL_AUTH_REDIRECT | http://localhost:3000/spotify                                                                                                                                   |
## Run development app

```bash
yarn dev
# or
now dev
```

## Run production app

Build it with docker:

```bash
# build
yarn docker-build
# or, use multi-stage builds to build a smaller docker image
yarn docker-build-ms
```

Run it:

```bash
yarn docker-run
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
yarn deploy
```