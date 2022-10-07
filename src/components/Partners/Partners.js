import React from "react"

// import { FaLinkedinIn, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa"
import { organizers } from "../../assets/data/organizers"
import "./Partners.css"

function Partners() {
  return (
    <div className="container partners" id="partners">
      <h1 className="section_title">Partner Organizations</h1>
      <div className="partner_card_container">
        {organizers.map((organizer) => {
          return (
            <div className="partner_card">
              <div className="partner__image">
                <img src={organizer.photo} alt="" />
              </div>
              <h4 className="partner__name">{organizer.name}</h4>
              <h6 className="partner__role">{organizer.title}</h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Partners
