import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import CakeCard from './Components/CakeCard/CakeCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <CakeCard/>
    </>
  )
}

export default App
