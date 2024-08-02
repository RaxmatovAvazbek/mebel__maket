import React from 'react'
import ReactDOM from 'react-dom/client'
// import Header from './components/Header.jsx'
// import Main from './components/Main.jsx'
// import Footer from './components/Footer.jsx'
// import Blog from './components/Blog.jsx'
import App from './App.jsx'
import './index.css'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
       <App/>
     </BrowserRouter>
  </React.StrictMode>,
)
