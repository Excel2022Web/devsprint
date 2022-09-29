import React from 'react'
import { FaLinkedinIn,FaRegEnvelope,FaPhoneAlt } from 'react-icons/fa'

import './Team.css'

function ContactCard() {
  return (
    <div className='contact_card'>
        <div className='contact__image'>
            <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg' alt='' />
        </div>
       
        <h4 className='contact__name'>Royce Elson</h4>
        <h6 className='contact__role'>Project Lead</h6>
        <div className='contact_icons'>
            <FaPhoneAlt className='contactIcon'/>
            <FaRegEnvelope className='contactIcon'/>
            <FaLinkedinIn className='contactIcon'/>
        </div>
    </div>
  )
}

export default ContactCard