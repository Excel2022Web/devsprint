import React from 'react'

import { Landing, About, Highlights, Partners, Team, Organizations, Timeline } from '../../components'

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
      {/* <Sponsors /> */}
      <Team />
    </div>
  )
}

export default LandingPage