
import Navbar from './Component/Navbar/Navbar'
import { Routes,Route,Link } from 'react-router-dom'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Products from './Component/Products/Products'
import Product from './Component/Product/Product'
import ClassBase from './Component/Classbase/ClassBase'



function App() {


  return (
    <>
     {/* <Navbar/>
     <Products/>
  
     <Product/>
     <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
     </Routes> */}

     <ClassBase/>
    
    </>
  ) 
}

export default App
