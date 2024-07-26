import React from 'react'
import { Link } from 'react-router-dom'

function Notfound404() {
  return (
    <div>
      <p>Page not found. go to home page <Link to='/'>Homepage</Link></p>
    </div>
  )
}

export default Notfound404
