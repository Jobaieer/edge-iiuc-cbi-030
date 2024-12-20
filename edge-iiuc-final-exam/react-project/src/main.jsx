import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './components/Navbar/Navbar.jsx'
import './components/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
