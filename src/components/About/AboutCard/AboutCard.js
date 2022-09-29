import React from 'react';
import { BsAlarm } from 'react-icons/bs'

import './AboutCard.css'

function AboutCard() {
  return (
    <div className='aboutCard'>
        <div className='aboutcard_icon'>
            <BsAlarm className='acicon'/>
        </div>
        <h3 className='aboutcard_title'>Live Broadcast</h3>
        <p className='aboutcard_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.</p>
        <h6 className='aboutcard_more'>Read More</h6>
    </div>
  )
}

export default AboutCard