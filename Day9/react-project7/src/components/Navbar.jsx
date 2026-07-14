import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
       <Link to="/">Home</Link>
        <Link to="/banner">Banner</Link>
    </div>
  )
}

export default Navbar
