import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './assets/Navbar/Navbar'



function App() {
  let route = createBrowserRouter([
    {path:"" , element:<Layout/> , children:[
      {index:true , element:<About/>},
      {path:"Portfolio" , element:<Portfolio/>},
      {path:"Contact" , element:<Contact/>}
    ]}
  ])
 

  return (
    <>
      <RouterProvider router={route}></RouterProvider>

    </>
  )
}

export default App
