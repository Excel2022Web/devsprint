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
                    <li className="timeline-item" data-date="9:30 AM">
                    <span className='t_bold'>Introduction to the Organisations</span>
                    <span>The programme commences with a morning session where all the participating projects are introduced to the participants by the Project Maintainers & Representatives. </span>
                    </li>
                    <li className="timeline-item" data-date="11:30 AM">
                      <span className='t_bold'>Branch Off</span>
                      <span>After choosing the projects of interest, participants approach the project representatives, at their designated locations, to get a more comprehensive view of the project and to contribute to it.</span>
                    </li>
                    <li className="timeline-item" data-date="12:30 PM">
                      <span className='t_bold'>Lunch Break</span>
                    </li>
                    <li className="timeline-item" data-date="1:30 PM">
                      <span className='t_bold'>Dive into the Organisation </span>
                      <span>Participants get acquainted well enough to start their OSS Contributions on the go. Contributions of all mastery levels promoted, from feature adds, redesigning a whole webpage to writing the documentation.</span>
                    </li>
                    <li className="timeline-item" data-date="4:30 PM">
                      <span className='t_bold'>Closing Ceremony</span>
                      <span>The Inaugural Day of DevSprint officially concludes.</span>
                    </li>
                </ul>
                <h3 className='timeLine_date'>17 - 23 October</h3>
                <ul className="timeline">
                    <li className="timeline-item" data-date="">
                      <span className='t_bold'>Remote contributions</span>
                      <span>Participants complete their contributions remotely, over the period of a week, concluding on 23rd October.</span>
                    </li>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Timeline