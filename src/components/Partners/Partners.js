import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { partnerData } from './partnerData'

import "./Partners.css"

function Partners() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="container partners" id="partners" data-aos="fade-up">
      <h1 className="section_title">Speakers</h1>
      <div className="partner_card_container">
        {partnerData.map((partner) => (
          <div className="partner_card" key={partner.id}>
            <h4 className="partner__name">{partner.name}</h4>
            <h6 className="partner__role">{partner.organization}</h6>
            <h6 className="partner__organization">
              {partner.desc}
            </h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
