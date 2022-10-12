import React from 'react'

import './Colleges.css'

import { collegeData } from './collegeData'

function Colleges() {
  return (
    <div className='colleges'>
        <h1 className="section_title">Colleges</h1>
        <div className='colleges__container'>
              <div className='clubsnorgs_marquee'>
                {collegeData.map((clg) => (
                    <a href={clg.url} key={clg.id} className="colleges_details">
                      <img src={clg.logo} alt="" />
                      <h4>{clg.name}</h4>
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Colleges