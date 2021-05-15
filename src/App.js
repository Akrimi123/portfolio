import React from 'react'
import {Navv} from './components/Navbar'
import {About, Home} from './components/home'
import './App.css'

const App = () => {
  return (
    <div>
      <Navv />
      <Home />
      <About />
    </div>
  )
}

export default App;

