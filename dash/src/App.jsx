import { useState } from 'react'
import Login from './Pages/Login/Login'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Sign from'./Pages/Sign/Sign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
        <Routes>
          <Route exact path='/' element={ <Login /> } />
          <Route exact path='/sign' element={ <Sign /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
