import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container-navbar'>
    <h1>FitPulse</h1>
    <div className='list'>
    <Link to='/'>Home</Link>
    <Link to='/'>Workouts</Link>
    <Link to='/'>Programs</Link>
    <Link to='/'>Contact us</Link>
    
    
    </div>
    
    </div>
  )
}

export default Navbar
