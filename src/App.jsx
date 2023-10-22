import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forget from './Pages/Forget';
import Home from './Pages/Home';
import Create from "./Pages/Create";
import Calendar from "./Pages/Calendar";
import Publicaciones from "./Pages/Publicaciones";
import Tips from "./Pages/Tips";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Registro" element={<Register />}/>
        <Route exact path="/Recuperar" element={<Forget />} />
        <Route exact path="/Dashboard" element={<Home />} />
        <Route exact path="/Create" element={<Create />} />
        <Route exact path="/Calendar" element={<Calendar />} />
        <Route exact path="/Publicaciones" element={<Publicaciones />} />
        <Route exact path="/Tips" element={<Tips/>} />
      </Routes>
    </>
  )
}
export default App