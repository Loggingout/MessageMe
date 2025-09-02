//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  

  return (
    <>
      <header>
        <div className="header-container">
          <Navbar />
        </div>
      </header>
      <main>
        <div className="main-container">
          <Home />
        </div>
      </main>
    </>
  )
}

export default App
