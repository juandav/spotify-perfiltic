import React from 'react'
import {
  SongDetail, SongControls, SongProgress,
  ReverseSong, PlaySong, NextSong,
  TimerLeft, Progress
} from './style'
import { MdSkipPrevious, MdPlayCircleOutline, MdSkipNext } from 'react-icons/md'

const Controls = props => {
  return (
    <>
      <SongDetail>
        <p>Canción: Lorem Ipsum</p>
        <p>Autor: juandav</p>
      </SongDetail>

      <div>
        <SongControls>
          <ReverseSong>
            <MdSkipPrevious />
          </ReverseSong>

          <PlaySong>
            <MdPlayCircleOutline />
          </PlaySong>

          <NextSong>
            <MdSkipNext />
          </NextSong>
        </SongControls>

        <SongProgress>
          <TimerLeft>0:00</TimerLeft>
          <Progress />
        </SongProgress>
      </div>
    </>
  )
}

export default Controls
