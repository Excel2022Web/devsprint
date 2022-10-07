import React from 'react'

import { Landing, About, Highlights, Partners, Team, Organizations } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landingPage">
      <Landing />
      <About />
      <Highlights />
      <Partners />
      <Organizations />
      {/* <Sponsors /> */}
      <Team />
    </div>
  )
}

export default LandingPage