import React from "react"

import "./Landing.css"
import devsprintLogo from "../../assets/png/devsprint_logo_new.png"


  
function Landing() {
  return (
    
    <div className="landing">
      <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      <div className="container landing-body">
        <div className="landing-logo">
          <img src={devsprintLogo} alt="" />
        </div>
        <div className="landing-heading">
          {/* <h2 className='landing-title'>DEVSPRINT</h2> */}
          <h4 className="landing-desc">16-23 October, 2022</h4>
        </div>
        <button className="landing-button">Register</button>
      </div>
    </div>
    
  )
}

export default Landing
