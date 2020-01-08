import React from 'react'
import { Screen as ScreenWrapped, Content } from './styles'
import Playlist from './Playlist'

const Screen = ({ children }) => (
  <ScreenWrapped>
    <Playlist />
    <Content>
      {children}
    </Content>
  </ScreenWrapped>
)
export { Screen }
