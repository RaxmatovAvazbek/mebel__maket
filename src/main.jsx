import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import App from './App.jsx'
import './index.css'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main/>
    <Footer/>
  </React.StrictMode>,
)
