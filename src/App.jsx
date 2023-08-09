import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Forget from './Pages/Forget'
import Pagina from "./Pages/Pagina"; 
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/james" element={<Pagina />} />
        <Route exact path="/Registro" element={<Register />}/>
        <Route exact path="/Recuperar" element={<Forget />} />
      </Routes>
    </>
  )
}
export default App