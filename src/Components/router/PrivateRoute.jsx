import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../../assets/helpers/routes";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isLogged } = useAuth();
  if (!isLogged())
    return <Navigate to={routes.login} state={{ from: location }} />;
  return children;
};
export default PrivateRoute;