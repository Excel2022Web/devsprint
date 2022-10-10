import React from 'react'

import './Timeline.css'

function Timeline() {
  return (
    <div className='timelineSection' id='timeline'>
        <h2 className="section_title white">Timeline</h2>
        <div id="timeline-container">
            <div className="inner-container" >
                <h3 className='timeLine_date'>16 October</h3>
                <ul className="timeline">
                    <li className="timeline-item" data-date="9:30 AM">Morning Session (Introduction to Organisation)</li>
                    <li className="timeline-item" data-date="11:30 AM">Move to allotted classrooms</li>
                    <li className="timeline-item" data-date="12:30 PM">Lunch</li>
                    <li className="timeline-item" data-date="1:30 PM">Dive into the Organisation</li>
                    <li className="timeline-item" data-date="4:30 PM">Closing Ceremony</li>
                </ul>
                <h3 className='timeLine_date'>17 - 23 October</h3>
                <ul className="timeline">
                    <li className="timeline-item" data-date="">Remote contributions</li>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Timeline