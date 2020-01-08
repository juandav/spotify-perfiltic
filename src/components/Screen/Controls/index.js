import React from 'react'
import { connect } from 'react-redux'
import { SongDetail, Player, Container } from './style'

const Controls = ({ currentSong }) => {
  const autor = (currentSong.artists) ? currentSong.artists[0].name : 'juandav'
  return (
    <>
      <SongDetail>
        <p>Canción: {currentSong.name}</p>
        <p>Autor: {autor}</p>
      </SongDetail>
      <Container>
        <Player src={currentSong.preview_url} allowfullscreen />
      </Container>
    </>
  )
}

const mapStateToProps = ({
  tracks: { current_song: currentSong }
}) => ({
  currentSong
})
const mapDispatchToProps = null // ({ })

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
