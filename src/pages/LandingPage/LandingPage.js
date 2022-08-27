import React from 'react'

import { Landing, About, Highlights, Sponsors } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div>
        <Landing />
        <About />
        <Highlights />
        <Sponsors />
    </div>
  )
}

export default LandingPage