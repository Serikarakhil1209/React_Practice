import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { Routes,Route,Link } from 'react-router-dom'
import About from './Component/About/About'


function App() {


  return (
    <>
     <Navbar/>
     <About/>
     <Routes>
      <Route path='/about' element = {<About/>} />
     </Routes>
    </>
  ) 
}

export default App
