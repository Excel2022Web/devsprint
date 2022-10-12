import React from 'react'

import { Landing, About, Highlights, Partners, Team, Organizations, Timeline, Colleges } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landingPage">
      <Landing />
      <About />
      <Highlights />
      <Timeline />
      <Partners />
      <Organizations />
      <Colleges />
      <Team />
    </div>
  )
}

export default LandingPage