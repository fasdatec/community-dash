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

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path={routes.login} element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }/>
        <Route exact path={routes.registros.home} element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }/>
        <Route exact path={routes.recuperar} element={
          <PublicRoute>
            <Forget />
          </PublicRoute>
        }/>
        <Route path={'/home/*'} element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }/>
        <Route exact path={'/dashboard/*'} element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}

export default AppRouter