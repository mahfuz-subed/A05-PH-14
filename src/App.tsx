import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import { Suspense } from 'react'
import type { Itechnologies } from './types/technologiesTypes'
import Footer from './components/Footer'

 const teachnolgiesPromise = async ():Promise<Itechnologies[]>=>{
      const res = await fetch("/data.json");
      const data = await res.json();
      return data;
  }


function App() {
  const [count, setCount] = useState(0)
 


  return (
    <>
      <Nav/>
      <Hero/>
      <Suspense fallback={<p>Loading.....</p>}>
        <Technologies teachnolgiesPromise={teachnolgiesPromise()}/>
      </Suspense>
      <Footer/>
   
    </>
  )
}

export default App
