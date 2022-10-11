import React from 'react'
import Marquee from "react-fast-marquee";

import './Colleges.css'

import { collegeData } from './collegeData'

function Colleges() {
  return (
    <div className='colleges'>
        <h1 className="section_title">Colleges</h1>
        <div className='colleges__container'>
            <Marquee
              pauseOnClick={true}
              pauseOnHover={true}
              speed={150}
              className='marquee_slide'
              gradient={false}
            >
            <div className='clubsnorgs_marquee'>
                {collegeData.map((clg) => (
                    <a href={clg.url} key={clg.id} className="colleges_img">
                        <img src={clg.logo} alt="" />
                    </a>
                ))}
            </div>
            </Marquee>
        </div>
    </div>
  )
}

export default Colleges