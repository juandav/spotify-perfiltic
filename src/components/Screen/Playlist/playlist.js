import React from 'react'
import {
  Link, Cover, Item,
  TimeLineNav, TimeLineContent, TimeLineMenu, TimeLineButton,
  TimeLineTitle, TimeLineBadge, TimeLineText
} from './styles'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { GiAbstract113 } from 'react-icons/gi'

export const TimelineNav = ({
  isOpenTimeLine = false,
  onToggle,
  onClickPlaylist,
  data,
  token
}) => {
  return (
    <TimeLineNav>
      <TimeLineContent hidden={!isOpenTimeLine ? 'hidden' : ''}>
        <TimeLineTitle>
          <TimeLineBadge>
            <GiAbstract113 alt='SPTIC' width='48px' />
          </TimeLineBadge>
          <TimeLineText> Playlist </TimeLineText>
        </TimeLineTitle>
        <div>
          <section>
            {data.map(item => (
              <Item key={item.id}>
                <Cover src={item.images[0].url} alt={item.name} />
                <Link onClick={event => onClickPlaylist(event, item.tracks.href)}>{item.name}</Link>
              </Item>
            ))}
          </section>
        </div>
      </TimeLineContent>
      <TimeLineMenu>
        <TimeLineButton>
          {
            isOpenTimeLine
              ? <MdChevronLeft onClick={() => onToggle()} />
              : <MdChevronRight onClick={() => onToggle()} />
          }
        </TimeLineButton>
      </TimeLineMenu>
    </TimeLineNav>
  )
}

export default TimelineNav
