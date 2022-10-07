import React from "react"

import "./Landing.css"
import devsprintLogo from "../../assets/png/devsprint_logo_new.png"

function Landing() {
  return (
    <div className="landing">
      <div className="container landing-body">
        <div className="landing-logo">
          <img src={devsprintLogo} alt="" />
        </div>
        <div className="landing-heading">
          {/* <h2 className='landing-title'>DEVSPRINT</h2> */}
          <h4 className="landing-desc">
            12-14 FEBRUARY 2018 - LOS ANGELES, CA
          </h4>
        </div>
        <button className="landing-button">Click here</button>
      </div>
    </div>
  )
}

export default Landing
