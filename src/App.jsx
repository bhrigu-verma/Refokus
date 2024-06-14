// import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
function App() {
 

  return (
    <div className='max-w-screen h-screen bg-black font-["satoshi_variable"]'>
      
      <Navbar/>
      <Work/> 
     <Stripes/>
<Products/>
<Marquees/>
<Cards/>
<Footer/>
        
    </div>
  )
}

export default App
