import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchTramData from './components/FetchTramData'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <FetchTramData/>
        </div>
  )
}

export default App
