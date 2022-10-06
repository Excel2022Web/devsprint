import React from "react"

import "./Organizations.css"

import excel_logo from "../../assets/png/excellogowithtext.png"
import foss_mec_logo from "../../assets/png/fossmec.png"

function Organizations() {
  return (
    <div className="container organizations" id="organizations">
      <h1 className="org_title">Organizations</h1>
      <div className="org-descriptions">
        <div className="org_event1">
          <div className="orgevent1_desc">
            <h2 className="orgdesc_name">Excel</h2>
            <p className="orgdesc_details">
              The builder interface comes with a lot of options that allow you
              to customize your building experience. We try not to lock you down
              into specific UI conventions, but instead give you the freedom go
              to create websites the way you want to.
            </p>
          </div>
          <div className="orgevent_img">
            <img src={excel_logo} alt="" />
          </div>
        </div>
        <div className="org_event2">
          <div className="orgevent_img">
            <img src={foss_mec_logo} alt="" />
          </div>
          <div className="orgevent2_desc">
            <h2 className="orgdesc_name">Foss MEC</h2>
            <p className="orgdesc_details">
              The builder interface comes with a lot of options that allow you
              to customize your building experience. We try not to lock you down
              into specific UI conventions, but instead give you the freedom go
              to create websites the way you want to.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organizations
