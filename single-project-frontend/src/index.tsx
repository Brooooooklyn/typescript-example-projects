import './polyfill'

import React from 'react'
import { render } from 'react-dom'

import { UserProfile } from './modules'

function App() {
  return (
    <UserProfile
      userName="太狼"
      userSlug="tailang"
      friends={['Saviio', 'Jerry']}
    />
  )
}

render(<App />, document.querySelector('#app'))
