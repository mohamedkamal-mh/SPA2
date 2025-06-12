import React from 'react'
import About from '../About/About'    
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../assets/Navbar/Navbar'

export default function Layout() {



  
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    
    
    </>
  )
}
