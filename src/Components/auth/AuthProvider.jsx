import { React, createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../../assets/api/axios";
import routes from "../../assets/helpers/routes";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const MySwal = withReactContent(Swal);
  const [user, setUser] = useState(null); // ✅ Corrige el valor inicial a `null`

  const isLogged = () => !!user;

  useEffect(() => {
    isLogin();
  }, []);

  /* 🔹 Verificar si el usuario tiene una sesión activa */
  const isLogin = async () => {
    const token = localStorage.getItem("token");
    if (!token) return; // ✅ Evita la petición si no hay token

    try {
      console.log("Token en isLogin:", token); // Imprime el token para verificar su valor

      const response = await instance.get(`/users/islogin`, {
        headers: { authorization: `Bearer ${token}` },
      });

      if (response.data && response.data.data) {
        setUser(response.data.data.name);
        localStorage.setItem("token", response.data.data.token);
      }
    } catch (error) {
      console.error("Error en isLogin:", error);

      // Si ocurre un error, se limpia el token y se redirige al login
      localStorage.removeItem("token");
      setUser(null);
      navigate(location.pathname);
    }
  };

  /* 🔹 Iniciar sesión */
  const login = async (user, fromLocation) => {
    try {
      const response = await instance.post(`/users/login`, user);

      if (response.data && response.data.data) {
        setUser(response.data.data);
        localStorage.setItem("token", response.data.data.token);

        if (fromLocation) {
          return navigate(fromLocation.from, { state: { pagina: fromLocation.pagina } });
        }
      }
    } catch (error) {
      console.error("Error en login:", error);

      // Mostrar alerta con el mensaje del error
      MySwal.fire({
        title: error.response?.data?.info?.message || "Error en el inicio de sesión",
        showConfirmButton: false,
        allowOutsideClick: false,
        color: "#fff",
        background: "#131313",
        confirmButtonColor: "#000",
        icon: "warning",
        timer: 2000,
      });
    }
  };

  /* 🔹 Cerrar sesión */
  const logout = async () => {
    const token = localStorage.getItem("token");
    if (!token) return; // ✅ Evita enviar una solicitud sin token

    try {
      await instance.put(
        "/users/logouts",
        { usuario: "prueba" },
        { headers: { authorization: `Bearer ${token}` } }
      );

      // Limpiar el token y el estado de usuario
      localStorage.removeItem("token");
      setUser(null);
      navigate(routes.login);
    } catch (error) {
      console.error("Error en logout:", error);

      // Mostrar alerta con el mensaje del error
      MySwal.fire({
        title: "Error al cerrar sesión",
        showConfirmButton: false,
        allowOutsideClick: false,
        color: "#fff",
        background: "#131313",
        confirmButtonColor: "#000",
        icon: "error",
        timer: 2000,
      });
    }
  };

  /* 🔹 Registro de usuario */
  const signUp = async (user) => {
    try {
      const response = await instance.post(`/users/add`, user);

      if (response.data?.info?.status === 200) {
        MySwal.fire({
          title: response.data.info.message,
          showConfirmButton: true,
          allowOutsideClick: false,
          color: "#fff",
          background: "#131313",
          confirmButtonColor: "#000",
          icon: "success",
          timer: 2000,
        });
        navigate(routes.login);
      }
    } catch (error) {
      console.error("Error en signUp:", error);

      MySwal.fire({
        title: error.response?.data?.info?.message || "Error en el registro",
        showConfirmButton: false,
        allowOutsideClick: false,
        color: "#fff",
        background: "#131313",
        confirmButtonColor: "#000",
        icon: "warning",
        timer: 2000,
      });
      navigate(routes.registros.home);
    }
  };

  /* 🔹 Contexto de autenticación */
  const contextValue = {
    user,
    isLogged,
    login,
    logout,
    signUp,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
