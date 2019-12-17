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
export const Button = styled.button`
  padding: 15px 50px;
  text-transform: uppercase;
  background: #8300ff;
  border: 2px solid #8300ff;
  color: #fff;
  font-weight: 600;
  font-size: .75rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all .4s;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 14px 26px -12px rgba(131, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(131, 0, 255, 0.2);
  }
`
