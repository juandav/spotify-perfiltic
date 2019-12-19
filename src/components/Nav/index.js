import React from 'react'
import Link from 'next/link'
import { Navigation, Menu, MenuItem, To } from './styles'

const links = [
  { href: 'http://juandav.github.io/', label: 'Juandav' },
  { href: 'https://github.com/juandav', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <Navigation>
    <Menu>
      <MenuItem>
        <Link href='/'>
          <To>Home</To>
        </Link>
      </MenuItem>
      {links.map(({ key, href, label }) => (
        <MenuItem key={key}>
          <To href={href}>{label}</To>
        </MenuItem>
      ))}
    </Menu>
  </Navigation>
)

export default Nav
