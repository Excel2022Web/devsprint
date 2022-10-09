import React from "react"
import { BsLightbulb, BsGlobe, BsBook } from "react-icons/bs"
import { FaHandshake } from "react-icons/fa"

import "./About.css"
import "./AboutCard/AboutCard.css"

function About() {
  return (
    <div className="container about" id="about">
      <div className="about-heading">
        <h2 className="section_title">About the event</h2>
        <div className="about-desc">
          <p className="about-desc1">
            FOSSMEC & EXCEL is here with a spectacular event to create a dynamic
            learning experience and to encourage students and working
            professionals to contribute to Open Source. Open your eyes to the
            world of open source innovation and seize this opportunity to
            interact with real world projects while gaining a deep understanding
            of the software projects.
          </p>
          <p className="about-desc2">
            Contributing to open source projects can be a lot of fun, though
            challenging at first. What better way to explore it than with
            DevSprint & an OSS enthusiastic community around you! So, sign up
            and take your impact to the next level on the 16th of this October,
            2022 at Govt. Model Engineering College, Thrikkakara.
          </p>
        </div>
      </div>
      <div className="about-cards">
        <div className="aboutCard">
          <div className="aboutcard_icon">
            <BsLightbulb className="acicon" />
          </div>
          <h3 className="aboutcard_title">Be Inspired</h3>
          <p className="aboutcard_desc">
            Sign up & attend Passionate speeches from maintainers about their
            Project, code base, tech stacks & future ventures.
          </p>
        </div>
        <div className="aboutCard">
          <div className="aboutcard_icon">
            <BsBook className="acicon" />
          </div>
          <h3 className="aboutcard_title">Examine & Learn</h3>
          <p className="aboutcard_desc">
            Grab the opportunity to get acquainted with various projects and
            contribute to projects of your choice.
          </p>
        </div>
        <div className="aboutCard">
          <div className="aboutcard_icon">
            <BsGlobe className="acicon" />
          </div>
          <h3 className="aboutcard_title">Network</h3>
          <p className="aboutcard_desc">
            Don't shy away from interacting and networking with industry experts
            of varied professional experience.
          </p>
        </div>
        <div className="aboutCard">
          <div className="aboutcard_icon">
            <FaHandshake className="acicon" />
          </div>
          <h3 className="aboutcard_title">Contribute More!</h3>
          <p className="aboutcard_desc">
            Loving the project you're working on? Submit a proposal to the
            maintainers with your inventive ideas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
