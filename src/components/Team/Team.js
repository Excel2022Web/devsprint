import React from "react"
import { useEffect } from "react"
import { FaLinkedinIn, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"
import {organizers} from "../../assets/data/organizers"

import "./Team.css"

function Team() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="container team" id="team" data-aos="fade-up">
      <h1 className="section_title">Contact Us</h1>
      <div className="team_card_container">
        {organizers.map((organizer) => {
          return (
            <div className="contact_card">
              <div className="contact__image">
                <img
                  src={organizer.photo}
                  alt=""
                />
              </div>
              <h4 className="contact__name">{organizer.name}</h4>
              <h6 className="contact__role">{organizer.title}</h6>
              <div className="contact_icons">
                <a href={"tel:" + organizer.phone}>
                  <FaPhoneAlt className="contactIcon" />
                </a>
                <a href={"mailto:" + organizer.email}>
                  <FaRegEnvelope className="contactIcon" />
                </a>
                <a href={organizer.linkedin}>
                  <FaLinkedinIn className="contactIcon" />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
