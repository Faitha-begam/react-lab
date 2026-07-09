import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Banner from './components/Banner'
import Features from './components/Features'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/banner" element={<Banner/>}/>
      <Route path="/feature" element={<Features/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
