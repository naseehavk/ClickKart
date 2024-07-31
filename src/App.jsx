import { useState } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wish from './pages/Wish'
import View from './pages/View'

import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish' element={<Wish />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
