import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Technologies from './components/Technologies'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      <Technologies/>
   
    </>
  )
}

export default App
