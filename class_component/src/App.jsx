import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Products from './Components/Products/Products'

function App() {
  

  return (
  <>
  <Navbar/>
  <Routes>
   <Route path='/Home'  element={<Home/>} />
   <Route path='/About'  element={<About/>} />
   <Route path='/Products'  element={<Products/>} />
  </Routes>

  </>
  )
}

export default App
