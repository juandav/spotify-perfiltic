import styled from 'styled-components'

export const Navigation = styled.nav`
  text-align: center;
  & > ul {
    padding: 4px 16px;
  }
`
export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
`
export const MenuItem = styled.li` 
  display: flex;
  padding: 6px 8px;
`
export const To = styled.a`
  color: #2e112d;
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
`
