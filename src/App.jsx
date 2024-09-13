import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './Component/Accordion'
import Weather from './Component/Weather App/weather'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Weather />
    </div>
  )
}

export default App
