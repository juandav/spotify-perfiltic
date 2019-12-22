import React from 'react'
import { Screen as ScreenWrapped } from './styles'
import Playlist from './Playlist'

const Screen = ({ children }) => (
  <ScreenWrapped>
    <Playlist />
    {children}
  </ScreenWrapped>
)
export { Screen }
