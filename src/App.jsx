import { useState } from 'react'
import 'tachyons'
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

function App() {

  return (
<>
      <Header />
        <main>
          <Routes>
          
              <Route path="/" element={<Portfolio />} />
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </main>
      <Footer/>
      </>

  )
}

export default App
