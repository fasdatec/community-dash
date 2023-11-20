import { React, createContext, useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from '../../assets/api/axios';
import routes from "../../assets/helpers/routes";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const MySwal = withReactContent(Swal);
  const [user, setUser] = useState(null)
  const isLogged = () => !!user;

  useEffect(() => {
    isLogin()
  }, [])
  /* function to verify if the user had the correct data to login*/
  const isLogin = () => {
    const token = localStorage.getItem('token')
    instance.get(`/users/islogin`, { headers: { authorization: token } })
    .then((response) => {
      setUser(response.data.data)
    })
    .catch((error) => {
      localStorage.removeItem('token');
      navigate(location.pathname)
    })
  }
  /*Function to verify the token and another information for navigate to login*/    
  const login = (user, fromLocation) => {
    instance.post(`/users/login`, user)
    .then((response) => {
      setUser(response.data.data);
      console.log(response.data.data);
      localStorage.setItem("token", response.data.data.token);
      if (fromLocation) {
        return navigate(fromLocation.from, { state: { pagina: fromLocation.pagina } });
      }
      navigate(routes.home);
    })
    .catch((error) => {
      MySwal.fire({
        title: error.response.data.info.message,
        showConfirmButton: false,
        allowOutsideClick: false,
        color:'#fff',
        background:'#131313',
        confirmButtonColor: '#000',
        icon: 'error',
        timer:2000
      });
    });
  };
  /*Function to crash the sesion*/
  const logout = () => {
    const token = localStorage['token']
    instance.put("/users/logouts", { usuario: "prueba" }, 
    { headers: { authorization: token, }})
    .then(() => {
      localStorage.removeItem("token");
      setUser(null);
      navigate(routes.login);
    }).catch((error) => {
      if(error.response.status === 500){
        MySwal.fire({
          title:'Inicio de Sesión erroneo',
          showConfirmButton: false,
          allowOutsideClick: false,
          color:'#fff',
          background:'#131313',
          confirmButtonColor: '#000',
          icon: 'error',
          timer:2000
        });
      }
    });
  }
  /*Function of the context*/
  const contextValue = {
    user,
    isLogged,
    login,
    logout,
  }
  return (
      <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
}
