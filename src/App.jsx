import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/about' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
