import React from "react"
import { useEffect } from "react"
import { HiCode } from "react-icons/hi"
import AOS from "aos"
import "aos/dist/aos.css"

import "./HighlightsCard/HighlightsCard.css"
import "./Highlights.css"

function Highlights() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="container highlights" id="highlights" data-aos="fade-up">
      <div className="highlights-heading">
        <h2 className="section_title">Highlights</h2>
      </div>
      <div className="highlights-card">
        <div className="highlightsCard">
          <div className="highlightsCard-icon">
            <HiCode className="card-icon" />
          </div>
          <h4 className="highlightsCard-title">Community</h4>
          <h6 className="highlightsCard-desc">
            No better way to work on projects than when surrounded by a
            like-minded community focused on achieving positive socio-technical
            change.
          </h6>
        </div>
        <div className="highlightsCard">
          <div className="highlightsCard-icon">
            <HiCode className="card-icon" />
          </div>
          <h4 className="highlightsCard-title">Fight for the Cause</h4>
          <h6 className="highlightsCard-desc">
            Work on FOSS projects and support open collaboration and
            unadulterated access.
          </h6>
        </div>
        <div className="highlightsCard">
          <div className="highlightsCard-icon">
            <HiCode className="card-icon" />
          </div>
          <h4 className="highlightsCard-title">Be Future-proof</h4>
          <h6 className="highlightsCard-desc">
            The Future is Remote. Get a real chance to work on FOSS projects in
            a remote setup in preparation for the real world.
          </h6>
        </div>
        <div className="highlightsCard">
          <div className="highlightsCard-icon">
            <HiCode className="card-icon" />
          </div>
          <h4 className="highlightsCard-title">Showcase your skills</h4>
          <h6 className="highlightsCard-desc">
            Expose your unique open-source contribution to the world and let
            people see your technical ingenuity.
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Highlights
