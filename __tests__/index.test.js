import React from 'react'
import { shallow } from 'enzyme'

import App from '../pages/index'
import { Title } from '../src/styles/Home'

describe('General app tests', () => {
  it('App shows "Welcome to Next.js!"', () => {
    const app = shallow(<App />)
    console.log(app.find('h1'))
    expect(app.find(Title).text()).toEqual('Welcome to Next.js!')
  })
})
