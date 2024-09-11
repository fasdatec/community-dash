import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from './PrivateRoute';
import routes from "../../assets/helpers/routes";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Forget from '../../Pages/Forget';
import Home from '../../Pages/Home';
import Dashboard from "../Dashboard/Dashboard";
import Users from '../../Pages/Users';
import Clients from '../../Pages/Clients';
import Tips from '../../Pages/Tips';
import Calendar from '../../Pages/Calendar';
import Create from '../../Pages/Create';
import Publicaciones from '../../Pages/Publicaciones';
import Subscriptions from '../../Pages/Subscriptions'; 

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path={routes.login} element={
          <PublicRoute> <Login /> </PublicRoute>
        }/>
        <Route exact path={routes.registros.home} element={
          <PublicRoute> <Register /> </PublicRoute>
        }/>
        <Route exact path={routes.recuperar} element={
          <PublicRoute> <Forget /> </PublicRoute>
        }/>
        {/*Routes of the APP*/}
        <Route path={'/home/*'} element={
          <PrivateRoute> <Home /> </PrivateRoute>
        }/>
        <Route exact path={'/dashboard/*'} element={
          <PrivateRoute> <Dashboard /></PrivateRoute>
        }/>
        <Route exact path={'/login/'} element={
          <PrivateRoute> <Login /></PrivateRoute>
        }/>
        <Route exact path={routes.registros.usuarios} element={

          <PrivateRoute> <Users /> </PrivateRoute>
        }/>
        <Route exact path={routes.registros.clientes} element={
          <PrivateRoute> <Clients /> </PrivateRoute>
        }/>
        <Route exact path={routes.publicaciones.calendar} element={
          <PrivateRoute> <Calendar /> </PrivateRoute>
        }/>
        <Route exact path={routes.publicaciones.tips} element={
          <PrivateRoute> <Tips/> </PrivateRoute>
        }/>
        <Route exact path={routes.publicaciones.suscripciones} element={
          <PrivateRoute> <Subscriptions/> </PrivateRoute>
        }/>
        <Route exact path={routes.publicaciones.listado} element={
          <PrivateRoute> <Publicaciones /> </PrivateRoute>
        }/>
        <Route exact path={routes.publicaciones.creacion} element={
          <PrivateRoute> <Create/> </PrivateRoute>
        }/>
        {/* <Route exact path={routes.publicaciones.post} element={
          <PrivateRoute> <Posts/> </PrivateRoute>
        }/> */}


      </Routes>
    </>
  )
}

export default AppRouter;
