import { useState } from 'react'
import HeroBanner from './components/HeroBanner'
import Header from './components/Header'
import './App.css'
import Offers from './components/Offers'

function App() {
  
  return (
    <div className='wrapper'>
      <header>
      <Header/>
      <HeroBanner/>
      </header>
      <main>
        <Offers />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
