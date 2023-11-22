import React from 'react'
import "./Homepage.css"
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'

function Homepage() {
  return (
    <div className='homepage'>
        <div className='homepage__nav'>
            <Navbar/>
        </div>
        <div className='homepage__timeline'>
            <Timeline/>
        </div>
      
    </div>
  )
}

export default Homepage
