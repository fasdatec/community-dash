import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forget from './Pages/Forget';
import Home from './Pages/Home';
import Create from "./Pages/Create";
import Calendar from "./Pages/Calendar";
import Channels from "./Pages/Channels";
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
        <Route exact path="/Channels" element={<Channels />} />
      </Routes>
    </>
  )
}
export default App