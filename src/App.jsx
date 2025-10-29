import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home/Home.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import PlacedOrder from './Pages/PlacedOrder/PlacedOrder.jsx'
import { Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/'             element={<Home/>}/>
          <Route path='/cart'         element={<Cart/>}/>
          <Route path='/order' element={<PlacedOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App