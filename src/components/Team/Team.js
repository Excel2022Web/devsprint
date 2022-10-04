import React from 'react'
import ContactCard from './ContactCard'

import './Team.css'

function Team() {
  return (
    <div className='container team' id='team'>
      <h1 className='team_title'>Contact Us</h1>
      <div className='team_card_container'>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  )
}

export default Team