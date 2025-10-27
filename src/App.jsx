import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/'             element={<Home/>}/>
        <Route path='/cart'         element={<Cart/>}/>
        <Route path='/order' element={<PlacedOrder/>}/>
      </Routes>
    </div>
  )
}

export default App