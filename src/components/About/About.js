import React from 'react';

import './About.css'
import AboutCard from './AboutCard/AboutCard';

function About() {
  return (
    <div className='about'>
       <div className='about-heading'>
        <h2 className='about-title'>ABOUT THE EVENT</h2>
        <div className='about-desc'>
          <h6 className='about-desc1'>Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a accumsan. Pellentesque convallis consectetur tortor id placerat. Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula euismod.</h6>
          <h6 className='about-desc2'>In rhoncus massa nec sollicitudin. Ut hendrerit hendrerit nisl a accumsan. Pellentesque convallis consectetur tortor id placerat. Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula euismod quis. Maecenas ornare, ex in malesuada tempus.</h6>
        </div>
       </div>
       <div className='about-cards'>
        <AboutCard />
        <AboutCard />
        <AboutCard />
       </div>
    </div>
  )
}

export default About