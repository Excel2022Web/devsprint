import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"

// import { FaLinkedinIn, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa"
import { organizers } from "../../assets/data/organizers"
import "./Partners.css"
import { useEffect } from "react"

function Partners() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="container partners" id="partners" data-aos="fade-up">
      <h1 className="section_title">Partner Organizations</h1>
      <div className="partner_card_container">
        {organizers.map((organizer) => {
          return (
            <div className="partner_card">
              <h4 className="partner__name">{organizer.name}</h4>
              <h6 className="partner__role">{organizer.title}</h6>
              <h6 className="partner__organization">{organizer.title}</h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Partners
