import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import ComingSoonSection from './Components/ComingSoonSection'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LandingPage />
      <ComingSoonSection />
      <Footer/>
    </>
  )
}

export default App
