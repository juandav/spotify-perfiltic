import React from 'react'
import { Screen as ScreenWrapped } from './styles'

const Screen = ({ children }) => (
  <ScreenWrapped>
    {children}
  </ScreenWrapped>
)
export { Screen }
