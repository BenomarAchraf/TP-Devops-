import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
       <h1>Hello world</h1>
       <h1>Hello world</h1>
       <h1>Hello world</h1>
       <h3>welcome to my new channel</h3>
      </div>
      
      
        <label >
           {count}
        </label>

        
      

      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          count down 
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count up
        </button>

        
        
      </div>
      
    </div>
  )
}

export default App
