import React from "react"

import "./Organizations.css"

import excel_logo from "../../assets/png/excellogowithtext.png"
import foss_mec_logo from "../../assets/png/fosspng.png"

function Organizations() {
  return (
    <div className="container organizations" id="organizations">
      <h1 className="org_title">Organized By</h1>
      <div className="org-descriptions">
        <div className="org_event1">
          <div className="orgevent1_desc">
            <h2 className="orgdesc_name">Excel</h2>
            <p className="orgdesc_details">
              Excel is the annual national level techno-managerial fest of Govt.
              Model Engineering College. Conceived in 2001 by the students,
              Excel has grown exponentially, providing a strong platform which
              hosts technical, managerial and general events. These events are
              scheduled over three action packed days. Apart from a series of
              high profile events like IBeTo (Innovations for a Better
              Tomorrow), Untitled and .ISSUE!, Excel conducts online
              competitions, workshops, talks and seminars, video conferences,
              exhibitions and pro shows.
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
              FOSS MEC is the Free and Open-Source cell at Govt. Model
              Engineering College, Kochi. Comprised of a bunch of enthusiastic
              tech minds, they are passionate to learn new things while sharing
              the knowledge they already have. By encouraging coding and
              contributing to various open source projects, FOSS MEC aims in
              cultivating a collaborative culture among college students and the
              society as a whole.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organizations
