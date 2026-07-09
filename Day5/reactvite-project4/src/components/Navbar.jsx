import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Banner from './Banner'
import Features from './Features'
import Contact from './Contact'
import logoImage from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <>
    <div className='bg-black text-white flex justify-between p-2 border-b border-gray-600 shadow-2xl'>
        <div>
            <img className='w-20 h-20 rounded-full' src={logoImage} alt="" />
        </div>
        <div className='flex gap-10 p-7'>
            <Link to="/">Home</Link>
            <Link to="/banner">Banner</Link>
            <Link to="/feature">Features</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
