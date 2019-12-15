import styled from 'styled-components'

export const Hero = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.h1`
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  text-align: center;
`

export const Description = styled.p`
  text-align: center;
`

export const Row = styled.div`
  max-width: 880px;
  margin: 80px auto 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Card = styled.a`
  padding: 18px 18px 24px;
  width: 220px;
  text-align: left;
  text-decoration: none;
  color: #434343;
  border: 1px solid #9b9b9b;
  &:hover {
    border-color: #067df7;
  }
  & > h3 {
    margin: 0;
    color: #067df7;
    font-size: 18px;
  }
  & > p {
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: #333;
  }
`
