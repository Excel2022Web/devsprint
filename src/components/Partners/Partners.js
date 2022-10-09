import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"

// import { FaLinkedinIn, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa"
import "./Partners.css"
import { useEffect } from "react"

function Partners() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="container partners" id="partners" data-aos="fade-up">
      <h1 className="section_title">Speakers</h1>
      <div className="partner_card_container">
        <div className="partner_card">
          <h4 className="partner__name">Abraham Reji</h4>
          <h6 className="partner__role">Debian</h6>
          <h6 className="partner__organization">
            The Debian Project is an association of individuals who sharing a
            common goal to create a free operating system, available for
            everyone.
          </h6>
        </div>
        <div className="partner_card">
          <h4 className="partner__name">Akash Mohan</h4>
          <h6 className="partner__role">Hoppscotch</h6>
          <h6 className="partner__organization">
            Hoppscotch is an open source API development ecosystem crafted with
            minimalistic UI design.
          </h6>
        </div>
        <div className="partner_card">
          <h4 className="partner__name">Vishal Arya</h4>
          <h6 className="partner__role">Mon School</h6>
          <h6 className="partner__organization">
            MonSchool is the first experiment on the Mon Platform, a brand of
            social platforms whose vision is to provide community run
            alternatives to large private platforms.
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Partners
