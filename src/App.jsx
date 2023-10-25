import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forget from './Pages/Forget';
import Home from './Pages/Home';
import Create from "./Pages/Create";
import CreatePostbyClient from "./Components/CreatePost/CreatePostbyClient";
import FormPost from "./Components/CreatePost/FormPost";
import Calendar from "./Pages/Calendar";
import Publicaciones from "./Pages/Publicaciones";
import Tips from "./Pages/Tips";
import Users from "./Pages/Users";
import Subscriptions from "./Pages/Subscriptions";
import MetodoPago from "./Components/PlansSubs/MetodoPago";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Registro" element={<Register />}/>
        <Route exact path="/Recuperar" element={<Forget />} />
        <Route exact path="/Dashboard" element={<Home />} />
        <Route exact path="/Create" element={<Create />} />
        <Route exact path="/Create/Client/" element={<CreatePostbyClient/>} /> {/*Id del cliente y para mostrar redes*/}
        <Route exact path="/Create/Client/id/" element={<FormPost/>}/> {/*Id del cliente y id de su red para crear */}
        <Route exact path="/Calendar" element={<Calendar />} />
        <Route exact path="/Publicaciones" element={<Publicaciones />} />
        <Route exact path="/Subscriptions" element={<Subscriptions />} />
        <Route exact path="/Pago" element={<MetodoPago />} />
        <Route exact path="/Tips" element={<Tips/>} />
        <Route exact path="/Users" element={<Users />} />
      </Routes>
    </>
  )
}
export default App