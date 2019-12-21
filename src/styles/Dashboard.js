import styled from 'styled-components'

export const Background = styled.div`
  background-image: url('/images/forest-light-bg.jpg');
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Player = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animatop .9s cubic-bezier(.425,1.14,.47,1.125) forwards;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const Controls = styled.div`
  margin-top: -2px;
  text-align: center;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: #ececec;
  width: 480px;
  height: 40px;
`
