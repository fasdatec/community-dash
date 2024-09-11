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
  const [user, setUser] = useState(true)
  const isLogged = () => !!user;

  useEffect(() => {
    isLogin()
  }, [])
  /* 
  Function´s of the login for use the APP
  */
  /* function to verify if the user give the correct data*/
  const isLogin = () => {
    const token = localStorage.getItem('token')
    instance.get(`/users/islogin`, { headers: { authorization: `Bearer ${token}` } })
    .then((response) => {
      setUser(response.data.data.name)
      localStorage.setItem('token', response.data.data.token)
    })
    .catch((error) => {
      localStorage.removeItem('token');
      navigate(location.pathname)
    })
  }
  /*Function to verify the token for navigate to login*/    
  const login = (user, fromLocation) => {
    instance.post(`/users/login`, user)
    .then((response) => {
      setUser(response.data.data);
      localStorage.setItem("token", response.data.data.token);
      if (fromLocation) {
        return navigate(fromLocation.from, { state: { pagina: fromLocation.pagina } });
      }
    })
    .catch((error) => {
      console.log(error);
      MySwal.fire({
        title: error.response.data.info.message,
        showConfirmButton: false,
        allowOutsideClick: false,
        color:'#fff',
        background:'#131313',
        confirmButtonColor: '#000',
        icon: 'warning',
        timer:2000
      });
    });
  };
  /*Function to Crash the sesion*/
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
  /* 
  Function´s of new account and forget the password
  */
  /*Function of add a new user in the signing*/
  const signUp = (user) => {
    instance.post(`/users/add`, user )
    .then((response)=>{
      if (response.data.info.status === 200) { 
          MySwal.fire({
              title: response.data.info.message,
              showConfirmButton: true,
              allowOutsideClick: false,
              color:'#fff',
              background:'#131313',
              confirmButtonColor: '#000',
              icon: 'success',
              timer:2000
            });
            navigate(routes.login);
          }
        }).catch((error) => {
          if(error.response.data.info.status === 400){
            MySwal.fire({
              title: 'Este Usuario ya existe',
              showConfirmButton: false,
              allowOutsideClick: false,
              color:'#fff',
              background:'#131313',
              confirmButtonColor: '#000',
              icon: 'warning',
              timer:2000
            });
            navigate(routes.registros.home);
          }
        })
  }
  /*Function of the context*/
  const contextValue = {
    user,
    /**Functions of login*/
    isLogged,
    login,
    logout,
    /**Functions to register a user */
    signUp,
  }
  return (
      <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
}
