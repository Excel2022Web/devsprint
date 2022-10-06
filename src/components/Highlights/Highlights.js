import React from 'react'

import './Highlights.css'
import HighlightsCard from './HighlightsCard/HighlightsCard'

function Highlights() {
  return (
    <div className='container highlights' id='highlights'>
      <div className='highlights-heading'>
        <h2 className='highlights-title'>Highlights</h2>
        <h6 className='highlights-desc'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</h6>
      </div>
      <div className='highlights-card'>
         <HighlightsCard />
         <HighlightsCard />
         <HighlightsCard />
         <HighlightsCard />
         <HighlightsCard />
         <HighlightsCard />
      </div>
    </div>
  )
}

export default Highlights