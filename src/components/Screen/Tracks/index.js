import React from 'react'
import { connect } from 'react-redux'
import { setCurrentSong } from '../../../store/tracks/actions'
import TracksComponent from './tracks'

const Tracks = ({
  data,
  error,
  loading,
  setCurrentSong
}) => {
  const playTrack = track => {
    setCurrentSong(track)
  }

  return (
    loading
      ? <h1>Cargando...</h1>
      : error
        ? <h1>Error</h1>
        : (
          <>
            <h1>Tracks</h1>
            <TracksComponent
              data={data}
              playTrack={playTrack}
            />
          </>
        )
  )
}

const mapStateToProps = ({
  tracks: { data, error, loading }
}) => ({
  data,
  error,
  loading
})
const mapDispatchToProps = ({ setCurrentSong })

export default connect(mapStateToProps, mapDispatchToProps)(Tracks)
