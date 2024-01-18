import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx';
import Data from './Data.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='heading'>Testimonials</h1>
      <Cards data = {Data}></Cards>
    </div>
  )
}

export default App
