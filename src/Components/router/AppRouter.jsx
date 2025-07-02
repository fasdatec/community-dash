import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from './PrivateRoute';
import routes from "../../assets/helpers/routes";

// Importaciones de páginas y componentes
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
import Posts from '../../Pages/Posts';
import ListPostWrapper from "../Post/ListPostWrapper";
import CreatePostFormWrapper from "../Post/CreatePostFormWrapper";


const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Rutas públicas (accesibles sin autenticación) */}
        <Route exact path={routes.login} element={
          <PublicRoute> <Login /> </PublicRoute>
        }/>
        <Route exact path={routes.registros.home} element={
          <PublicRoute> <Register /> </PublicRoute>
        }/>
        <Route exact path={routes.recuperar} element={
          <PublicRoute> <Forget /> </PublicRoute>
        }/>

        {/* Rutas privadas (accesibles solo con autenticación) */}
        {/* Las rutas con '/*' son para anidar rutas dentro de Home o Dashboard si tienes un Layout */}
        <Route path={'/home/*'} element={
          <PrivateRoute> <Home /> </PrivateRoute>
        }/>
        <Route path={'/dashboard/*'} element={
          <PrivateRoute> <Dashboard /></PrivateRoute>
        }/>
        
        {/* REVISIÓN: Esta ruta '/login/' dentro de PrivateRoute es redundante y puede ser un error lógico.
            Un usuario autenticado no debería ser enviado a la página de login.
            Si un usuario autenticado intenta acceder a /login, PrivateRoute debería redirigirlo.
            Si no tienes un caso de uso específico para esto, considera eliminarla.
            De lo contrario, PrivateRoute debería manejar la redirección a /home o /dashboard.
        */}
        {/* <Route exact path={'/login/'} element={
          <PrivateRoute> <Login /></PrivateRoute>
        }/> */} 

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
        <Route exact path={routes.publicaciones.post} element={
          <PrivateRoute> <Posts/> </PrivateRoute>
        }/>
        
        {/* Rutas para ListPostWrapper: una para "todas" y otra para ":social" */}
        {/* Ruta para ver TODAS las publicaciones (ej. /listpost) */}
        <Route path="/listpost" element={
            <PrivateRoute> <ListPostWrapper /> </PrivateRoute>
        }/>
        {/* Ruta para ver publicaciones por red social (ej. /listpost/Facebook) */}
        <Route path="/listpost/:social" element={
            <PrivateRoute> <ListPostWrapper /> </PrivateRoute>
        }/>

        {/* Ruta dinámica para crear post según red social */}
        <Route path="/Create/Client/:social" element={
          <PrivateRoute> <CreatePostFormWrapper /> </PrivateRoute>
        }/>
        
        {/* Puedes añadir una ruta para el caso de 404 (Not Found) si no tienes una global */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}

      </Routes>
    </>
  )
};

export default AppRouter;