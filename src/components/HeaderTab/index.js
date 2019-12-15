import React from 'react'
import PropTypes from 'prop-types'

const listIcon = {
  cartoon: '/spotify-cartoon.ico',
  monster: '/spotify-monster.ico',
  next: '/next.ico',
  default: '/favicon.ico'
}

const HeaderTab = ({ name, icon }) => (
  <>
    <title>{name}</title>
    <link rel="icon" href={listIcon[icon || listIcon.default]} />
  </>
)

HeaderTab.prototype = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export { HeaderTab }
