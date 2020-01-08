import React from 'react'
import { Track, TrackList } from './styles'

const Tracks = ({ data, playTrack }) => {
  return (
    <>
      <TrackList>
        {data.map(item => (
          <Track key={item.track.id} onClick={() => playTrack(item.track)}>
            <p>{item.track.name}</p>
          </Track>
        ))}
      </TrackList>
    </>
  )
}

export default Tracks
