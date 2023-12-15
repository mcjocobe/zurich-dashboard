import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FetchTramData, MinutesToNext} from './components/FetchTramData'
import FetchBusData from './components/FetchBusData'
import WasteCollection from './components/WasteCollection'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  return (

      <div>
          <div className ="container">
              <MinutesToNext/>
        </div>
        <div className ="container">
              <FetchTramData/>
        </div>
        <div className ="container-">
        <div className="row align-items-center">
            <div className='col'>
              <WasteCollection/>
            </div>
            <div className='col'>
              <FetchBusData/>
            </div>
            </div>
        </div>
      </div>
  )
}

export default App
