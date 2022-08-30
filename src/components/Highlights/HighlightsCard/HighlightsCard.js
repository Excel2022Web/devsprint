import React from 'react'

import { BsEmojiSmile } from 'react-icons/bs'

import './HighlightsCard.css'

function HighlightsCard() {
  return (
    <div className='highlightsCard'>
        <div className='highlightsCard-icon'>
           <BsEmojiSmile className='card-icon'/>
        </div>
        <h4 className='highlightsCard-title'>Marketing</h4>
        <h6 className='highlightsCard-desc'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</h6>
    </div>
  )
}

export default HighlightsCard