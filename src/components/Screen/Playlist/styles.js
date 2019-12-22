import styled from 'styled-components'

export const Nav = styled.nav`
  background: #024959;
`

export const List = styled.ul`
  overflow: hidden;
  list-style: none;
`

export const Item = styled.li`

`
export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 20px;
  display: block;
`

export const TimeLineNav = styled.aside`
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-align: stretch;
  -moz-box-align: stretch;
  -o-box-align: stretch;
  -ms-flex-align: stretch;
  -webkit-align-items: stretch;
  align-items: stretch;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -o-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  position: absolute;
  z-index: 15;
  top: 0px;
  left: 0;
  min-height: 100vh;
`
export const TimeLineContent = styled.div`
  background: #f6f6f6;
  width: 250px;
  overflow-y: scroll;
  height: 100vh;
  visibility: ${props => props.hidden ? 'hidden' : ''};
`
export const TimeLineMenu = styled.div`
  background: #0791e6;
  max-width: 30px;
  -webkit-box-pack: stretch;
  -moz-box-pack: stretch;
  -o-box-pack: stretch;
  -ms-flex-pack: stretch;
  -webkit-justify-content: stretch;
  justify-content: stretch;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`

export const TimeLineButton = styled.div`
  max-width: 100%;
  background: #056099;
  height: 60px;
  color: #fff;
  font-size: 35px;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  cursor: pointer;
`
export const TimeLineTitle = styled.a`
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  padding: 7px 15px;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  color: #273b47;
`
