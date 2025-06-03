import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEditDocument } from "react-icons/md";
import routes from '../../assets/helpers/routes';
import instance from '../../assets/api/axios';
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar';
import fasdatec from '../Dashboard/dashboard.module.scss';
import fasdatecOne from './usersactions.module.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const CreateUsers = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const options = ['Administrador', 'CM', 'Design'];
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [rol, setRole] = useState('');
  const [userData, setUserData] = useState([]);
  const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const cancelProcess = () => {
    MySwal.fire({
      title: `¿Estas seguro que deseas cancelar la creación del Usuario?`,
      width: '60%',
      padding: '1em',
      icon: 'warning',
      color: '#fff',
      showDenyButton: true,
      allowOutsideClick: false,
      background: "rgba(18, 18, 43, 0.92)",
      backdrop: 'rgba(6, 6, 46, 0.877)',
      showCancelButton: false,
      denyButtonColor: '#000',
      denyButtonText: 'Cancelar',
      confirmButtonColor: '#ffb727',
      confirmButtonText: 'Confirmar',
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: 'Seras llevado a otra página',
          showConfirmButton: false,
          allowOutsideClick: false,
          color: '#fff',
          width: '60%',
          padding: '1em',
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'success',
          timer: 2500
        });
        navigate(routes.home);
      } else if (result.isDenied) {
        MySwal.fire({
          title: 'Puedes Seguir creando a tu usuario',
          showConfirmButton: false,
          color: '#fff',
          width: '60%',
          padding: '1em',
          allowOutsideClick: false,
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'warning',
          timer: 2500
        });
      }
    })
  }
const validatePassword = (password) => {
  return password.length > 0; // Acepta cualquier contraseña no vacíaa
  }
  const doneProcess = async () => {
    // Validar que todos los campos estén completos
    if (!email || !username || !password || !rol) {
      setError('Todos los campos son requeridos.');
      return;
    }

      if (!password) {
  setPasswordError('La contraseña es obligatoria.');
  return;
} else {
  setPasswordError('');
}

  if (password !== confirmPassword) {
    setError('Las contraseñas no coinciden');
    return;
  }



    // Verificar si el correo ya existe
    const emailExists = userData.some(user => user.email?.toLowerCase() === email.toLowerCase());
    if (emailExists) {
      MySwal.fire({
        title: 'Error',
        text: 'El correo electrónico ya está registrado.',
        icon: 'error',
        color: '#fff',
        width: '60%',
        padding: '3em',
        background: "rgba(18, 18, 43, 0.92)",
        backdrop: 'rgba(6, 6, 46, 0.877)',
      });
      return;
    }
    
    // Confirmación antes de crear
    MySwal.fire({
      title: `¿Estas seguro de crear al usuario?`,
      width: '60%',
      padding: '3em',
      icon: 'warning',
      color: '#fff',
      showDenyButton: true,
      allowOutsideClick: false,
      background: "rgba(18, 18, 43, 0.92)",
      backdrop: 'rgba(6, 6, 46, 0.877)',
      showCancelButton: false,
      denyButtonColor: '#000',
      denyButtonText: 'Cancelar',
      confirmButtonColor: '#ffb727',
      confirmButtonText: 'Confirmar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Datos a enviar
          const userData = { email, username, password,rol };
          console.log('Enviando datos:', userData);
          
          // Llamar a la API para crear el usuario
          const response = await instance.post('/registrer/create', userData);
          
          console.log('Respuesta del servidor:', response.data);
          
          // Si la API no devuelve el usuario creado, lo creamos manualmente para la tabla
          // Esto asegura que se añada a la tabla inmediatamente incluso si hay problemas con getUsersInfo
          const newUser = response.data.user || {
            id: Date.now(), // ID temporal si no lo proporciona la API
            email: email,
            username: username,
            rol: rol
          };
          
          // Actualizar la lista de usuarios añadiendo el nuevo
          setUserData(prevUsers => [...prevUsers, newUser]);
          
          // Limpiar los campos después de crear exitosamente
          setEmail('');
          setUsername('');
          setRole('');
          setError('');
          
          // Mostrar mensaje de éxito
          MySwal.fire({
            title: 'Usuario Creado Correctamente',
            text: 'El usuario ha sido añadido a la lista',
            showConfirmButton: false,
            allowOutsideClick: false,
            color: '#fff',
            width: '60%',
            padding: '3em',
            background: "rgba(18, 18, 43, 0.92)",
            backdrop: 'rgba(6, 6, 46, 0.877)',
            confirmButtonColor: '#000',
            icon: 'success',
            timer: 2500
          });
          
          // Actualizar la lista completa desde el servidor
          getUsersInfo();
          
        } catch (error) {
          console.error('Error al crear usuario:', error);
          
          MySwal.fire({
            title: error.response?.data?.message || 'Error al crear usuario',
            text: 'Verifica los datos e intenta nuevamente',
            showConfirmButton: true,
            color: '#fff',
            width: '60%',
            padding: '3em',
            background: "rgba(18, 18, 43, 0.92)",
            backdrop: 'rgba(6, 6, 46, 0.877)',
            confirmButtonColor: '#ffb727',
            icon: 'error'
          });
        }
      } else if (result.isDenied) {
        MySwal.fire({
          title: 'Puedes Seguir creando a tu usuario',
          showConfirmButton: false,
          color: '#fff',
          width: '60%',
          padding: '3em',
          allowOutsideClick: false,
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'warning',
          timer: 2500
        });
      }
    });
  }

  const getUsersInfo = async () => {
    try {
      const response = await instance.get('/users/');
      
      // Accede a la propiedad 'users' en la respuesta
      const users = response.data.users;
  
      console.log('Usuarios obtenidos:', users);
  
      if (users) {
        setUserData(users);
      } else {
        console.error('No se encontraron usuarios en la respuesta');
        setUserData([]);
      }
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      
      MySwal.fire({
        title: 'Error al cargar usuarios',
        text: error.message,
        showConfirmButton: true,
        allowOutsideClick: true,
        color: '#fff',
        background: "rgba(18, 18, 43, 0.92)",
        backdrop: 'rgba(6, 6, 46, 0.877)',
        confirmButtonColor: '#ffb727',
        icon: 'error'
      });
    }
  }

  useEffect(() => {
    getUsersInfo();
  }, []);

  // Función updateUser corregida - ahora recibe el objeto completo del usuario
  const updateUser = (user, refreshUsers) => {
    // Verificamos que el usuario tenga los datos necesarios
    const username = user.username || '';
    const email = user.email || '';
    
    MySwal.fire({
      title: 'Actualizar Usuario',
      html: `
        <input id="swal-username" class="swal2-input" placeholder="Usuario" value="${username}">
        <input id="swal-email" class="swal2-input" placeholder="Correo" value="${email}">
        <input id="swal-password" type="password" class="swal2-input" placeholder="Nueva Contraseña (opcional)">
      `,
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar',
      background: "rgba(18, 18, 43, 0.92)",
      backdrop: 'rgba(6, 6, 46, 0.877)',
      color: '#fff',
      preConfirm: () => {
        const username = document.getElementById('swal-username').value.trim();
        const email = document.getElementById('swal-email').value.trim();
        const password = document.getElementById('swal-password').value.trim();
  
        if (!username || !email) {
          Swal.showValidationMessage('El usuario y el correo son obligatorios');
          return false;
        }
  
        return { id: user.id, username, email, password: password || undefined };
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await instance.put(`users/update/${user.id}`, result.value);
  
          MySwal.fire({
            title: "¡Usuario Actualizado!",
            text: response.data.info?.message || "Usuario actualizado correctamente",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            background: "rgba(18, 18, 43, 0.92)",
            backdrop: 'rgba(6, 6, 46, 0.877)',
            color: '#fff',
          });
  
          // Actualizar la lista de usuarios
          getUsersInfo();
  
        } catch (error) {
          MySwal.fire({
            title: "Error",
            text: error.response?.data?.info?.message || "No se pudo actualizar el usuario",
            icon: "error",
            timer: 2000,
            showConfirmButton: false,
            background: "rgba(18, 18, 43, 0.92)",
            backdrop: 'rgba(6, 6, 46, 0.877)',
            color: '#fff',
          });
        }
      }
    });
  };

  const deleteUser = async (id) => {
    MySwal.fire({
      title: `¿Estás seguro de eliminar este usuario?`,
      width: '60%',
      padding: '1em',
      icon: 'warning',
      color: '#fff',
      showDenyButton: true,
      allowOutsideClick: false,
      background: "rgba(18, 18, 43, 0.92)",
      backdrop: 'rgba(6, 6, 46, 0.877)',
      showCancelButton: false,
      denyButtonColor: '#000',
      denyButtonText: 'Cancelar',
      confirmButtonColor: '#ffb727',
      confirmButtonText: 'Confirmar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await instance.delete(`/users/delete/${id}`);
          
          // Remover el usuario eliminado de la lista local
          setUserData(prevUsers => prevUsers.filter(user => user.id !== id));
          
          MySwal.fire({
            title: 'Usuario eliminado correctamente',
            showConfirmButton: false,
            allowOutsideClick: false,
            color: '#fff',
            width: '60%',
            padding: '1em',
            background: "rgba(18, 18, 43, 0.92)",
            backdrop: 'rgba(6, 6, 46, 0.877)',
            confirmButtonColor: '#000',
            icon: 'success',
            timer: 2000
          });
        } catch (error) {
          console.error('Error al eliminar usuario:', error);
          
          MySwal.fire({
            title: error.response?.data?.message || 'Error al eliminar usuario',
            showConfirmButton: true,
            allowOutsideClick: true,
            color: '#fff',
            width: '60%',
            padding: '1em',
            background: "rgba(18, 18, 43, 0.92)",
            backdrop: 'rgba(6, 6, 46, 0.877)',
            confirmButtonColor: '#ffb727',
            icon: 'error'
          });
        }
      }
    });
  }

  // Función para mostrar el rol correctamente 
  const formatRole = (rol) => {
    if (!rol) return '—';
    
    // Aseguramos que el rol sea una cadena de texto
    const roleStr = String(rol);
    
    // Si el rol ya está en mayúsculas, lo devolvemos tal cual
    if (roleStr === roleStr.toUpperCase()) return roleStr;
    
    // Convertimos a mayúsculas
    return roleStr.toUpperCase();
  }

  return (
    <>
      <section className={fasdatec.commu__section__post}>
        <div className={fasdatec.commu__section__navigation}>
          <Navbar />
        </div>
        <div className={fasdatec.commu__post}>
          <Sidebar />
          <div className={fasdatec.commu__section__create__post}>
            <h1>Administración de Usuarios</h1>
            <div className={fasdatecOne.commu__section__form__container}>
              <h2 className={fasdatecOne.commu__form__subtitle}>Ingresa los Datos que se piden</h2>
              <div>
                <div className={fasdatecOne.commu__flexrow__form}>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="mail" className={fasdatecOne.commu__creation__label}>Correo Electrónico</label>
                    <input 
                      type="email" 
                      id='mail' 
                      className={fasdatecOne.commu__creation__input} 
                      placeholder='Correo Electrónico'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="name" className={fasdatecOne.commu__creation__label}>Nombre de Acceso</label>
                    <input 
                      type="text" 
                      id='name' 
                      className={fasdatecOne.commu__creation__input} 
                      placeholder='Nombre de Acceso'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="rol" className={fasdatecOne.commu__creation__label}>Rol del Usuario</label>
                    <select 
                      className={fasdatecOne.commu__creation__input} 
                      name="rol"
                      id="rol"
                      value={rol}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Elige una Opción</option>
                      {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                       
                    </select>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
  <label htmlFor="password" className={fasdatecOne.commu__creation__label}>Contraseña</label>
  <input 
    type="password" 
    id='password' 
    className={fasdatecOne.commu__creation__input} 
    placeholder='Contraseña'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>

<div className={fasdatecOne.commu__flexclm__form}>
  <label 
    htmlFor="confirmPassword" 
    className={fasdatecOne.commu__creation__label}
  >
    Confirmar Contraseña
  </label>
    <input
    type="password"
    id="confirmPassword"
    className={fasdatecOne.commu__creation__input}
    placeholder="Confirmar Contraseña"
    value={confirmPassword}
    onChange={(e) => {
      setConfirmPassword(e.target.value);
      if (password && e.target.value && password !== e.target.value) {
        setPasswordError('Las contraseñas no coinciden.');
      } else {
        setPasswordError('');
      }
    }}
  />
  {passwordError && (
    <p className={fasdatecOne.commu__error__message}>{passwordError}</p>
  )}
</div>  
                </div>
                {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
                <div className={fasdatecOne.commu__flexbtn}>
                  <input type="button" onClick={cancelProcess} className={fasdatecOne.commu__btn__cancel} value="Cancelar" />
                  <input type="button" onClick={doneProcess} className={fasdatecOne.commu__btn__send} value="Crear Usuario" />
                </div>
              </div>
              <h2 className={fasdatecOne.commu__form__subtitleOne}>Listado de Usuarios</h2>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {userData && userData.length > 0 ? (
                    userData.map((user) => (
                      <tr key={user.id || Math.random()}>
                        <td data-label="Nombre">{user.username || '—'}</td>
                        <td data-label="Rol">{formatRole(user.rol)}</td>
                        <td data-label="Editar">
                          <button className={fasdatecOne.commu__btn__update__action}
                            onClick={() => updateUser(user, getUsersInfo)}
                          >
                            <MdEditDocument />
                          </button>
                        </td>
                        <td data-label="Eliminar">
                          <button className={fasdatecOne.commu__btn__delete__action} 
                            onClick={() => deleteUser(user.id)}
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '15px' }}>No hay usuarios disponibles.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateUsers;
