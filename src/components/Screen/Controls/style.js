import styled from 'styled-components'

export const SongDetail = styled.div`
  display: flex;
  flex-direction: column;
  left: 20px;
  line-height: 22px;
  margin-right: 30px;
  margin-top: 18px;
  font-size: 12px;
`
export const SongControls = styled.div`
  -ms-flex-pack: center;
  justify-content: center;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
`
export const ReverseSong = styled.div`
  position: relative;
  top: -2px;
  font-size: 30px;
`

export const PlaySong = styled.div`
  position: relative;
  top: -7px;
  font-size: 40px;
`

export const PauseSong = styled.div`
   position: relative;
  top: -7px;
  font-size: 40px;
`

export const NextSong = styled.div`
   position: relative;
  top: -2px;
  font-size: 30px;
`

export const SongProgress = styled.div`
  margin-top: -10px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
`

export const TimerLeft = styled.div`
  font-size: 12px;
  position: relative;
  top: -7px;
  left: -10px;
`

export const Progress = styled.div`
  width: 400px;
  height: 4px;
  background: #404040;
  border-radius: 4px;
`
export const Player = styled.iframe`
  top: 0;
  left: 0;
  height: 50px;
  border: 0;
`

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`
