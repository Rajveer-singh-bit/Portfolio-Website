import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './home/Home'
import About from './about/About'
import Skills from './skills/Skills'
import Qualification from './qualification/Qualification'
import Projects from './projects/Projects'
import Contact from './contact/contact'
import Footer from './components/footer'

function App() {
  

  return (
   <div>
     <div><Header/></div>
     <div className='main'>
      <Home/>
      <About/>
      <Skills/>
       <Qualification/>
       <Projects/>
       <Contact/>
       <Footer/>
      </div>
</div>
  )
}

export default App
