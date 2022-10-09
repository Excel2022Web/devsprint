import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";


import './Loader.css'

function Loader() {
  return (
    <div className='loader'>
      <CircleLoader size={65} color="#b33c86"/>
    </div>
  )
}

export default Loader