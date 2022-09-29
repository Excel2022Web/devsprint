import React from 'react'

import { Landing, About, Highlights, Sponsors, Team, Organizations } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landingPage">
      <Landing />
      <About />
      <Highlights />
      <Organizations />
      {/* <Sponsors /> */}
      <Team />
    </div>
  )
}

export default LandingPage