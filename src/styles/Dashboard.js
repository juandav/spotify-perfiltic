import styled from 'styled-components'

export const Background = styled.div`
  background-image: url('/images/forest-light-bg.jpg');
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const PlayerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animatop .9s cubic-bezier(.425,1.14,.47,1.125) forwards;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const Card = styled.div`
  width: 510px;
  min-height: 100px;
  min-width: 300px;
  max-width: 600px;
  padding: 20px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,.2);
  position: relative;
  overflow: hidden;
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
