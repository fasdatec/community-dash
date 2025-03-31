import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEditDocument } from "react-icons/md";
import routes from '../../assets/helpers/routes';
import instance from '../../assets/api/axios';
import Navbar from '../Navs/NavBarComponent/Navbar';
import Sidebar from '../Navs/SidebarComponent/Sidebar';
import fasdatec from '../Dashboard/dashboard.module.scss';
import fasdatecOne from './clientsactions.module.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CreateClients = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const options = ['Facebook', 'Instagram', 'TikTok', 'YouTube', 'X', 'LinkedIn'];
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); 


  const cancelProcess = () => {
    MySwal.fire({
      title: `¿Estás seguro que deseas cancelar la creación del Cliente?`,
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
          title: 'Serás llevado a otra página',
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
        navigate(routes.home)
      } else if (result.isDenied) {
        MySwal.fire({
          title: 'Puedes seguir creando a tu cliente',
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

  const doneProcess = () => {
    MySwal.fire({
      title: `¿Estás seguro de crear al cliente?`,
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
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: 'Cliente Creado',
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
      } else if (result.isDenied) {
        MySwal.fire({
          title: 'Puedes seguir creando a tu cliente',
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
    })
  }

  const [userData, setUserData] = useState([]);

  const getUsersInfo = async () => {
    instance.get(`users/`)
      .then((response) => {
        setUserData(response.data.users)
      }).catch((error) => {
        MySwal.fire({
          title: error.message,
          showConfirmButton: false,
          allowOutsideClick: false,
          color: '#fff',
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'error',
          timer: 2500
        });
      });
  }

  useEffect(() => {
    getUsersInfo()
  }, [])

  const updateUser = (user, refreshUsers) => {
    Swal.fire({
      title: 'Actualizar Usuario',
      html: `
        <input id="swal-username" class="swal2-input" placeholder="Usuario" value="${user.username}">
        <input id="swal-email" class="swal2-input" placeholder="Correo" value="${user.email}">
        <input id="swal-password" type="password" class="swal2-input" placeholder="Nueva Contraseña (opcional)">
      `,
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar',
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
  
          Swal.fire({
            title: "¡Usuario Actualizado!",
            text: response.data.info.message,
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });
  
          refreshUsers();  
  
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: error.response?.data?.info?.message || "No se pudo actualizar el usuario",
            icon: "error",
            timer: 2000,
            showConfirmButton: false
          });
        }
      }
    });
  };

  
  const deleteUser = async (id) => {
    instance.delete(`users/delete/${id}`)
      .then((response) => {
        MySwal.fire({
          title: response.data.info.message,
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
        navigate(routes.home)
      })
      .catch((error) => {
        MySwal.fire({
          title: error.response.data.info.message,
          showConfirmButton: false,
          allowOutsideClick: false,
          color: '#fff',
          width: '60%',
          padding: '1em',
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'error',
          timer: 2000
        });
        getUsersInfo();
      });
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
            <h1>Creación de Cliente</h1>
            <div className={fasdatecOne.commu__section__form__container}>
              <h2 className={fasdatecOne.commu__form__subtitle}>Ingresa los Datos que se piden</h2>
              <div>{/*form*/} 
                <div className={fasdatecOne.commu__flexrow__form}>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="name" className={fasdatecOne.commu__creation__label}>Nombre de Cliente</label>
                    <input type="text" id='name' className={fasdatecOne.commu__creation__input} placeholder='Usuario'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="name" className={fasdatecOne.commu__creation__label}>Tipo de Red Social</label>
                    <select className={fasdatecOne.commu__creation__input} name="social">
                      <option>Elige una Opción</option>
                      {options.map((strong, index) => {
                        return <option key={index}>{strong}</option>
                      })}
                    </select>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="name" className={fasdatecOne.commu__creation__label}>Usuario</label>
                    <input type="text" id='name' className={fasdatecOne.commu__creation__input} placeholder='Usuario Encargado'/>
                  </div>
                </div>
                <div className={fasdatecOne.commu__flexbtn}>
                  <input type="button" onClick={cancelProcess} className={fasdatecOne.commu__btn__cancel} value="Cancelar" />
                  <input type="button" onClick={doneProcess} className={fasdatecOne.commu__btn__send} value="Crear Cliente" />
                </div>
              </div>{/*form*/}
              <h2 className={fasdatecOne.commu__form__subtitleOne}>Listado de Clientes</h2>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Rol de Usuario</th>
                    <th scope="col">Actualizar</th>
                    <th scope="col">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((dataUser) => (
                    <tr key={dataUser.id}>
                      <td data-label="Nombre">{dataUser.username}</td>
                      <td data-label="Rol">{dataUser.rol.toUpperCase()}</td>
                      <td data-label="Actualizar">
                        <button className={fasdatecOne.commu__btn__update__action}
                          onClick={() => updateUser(dataUser, getUsersInfo)}
                        >
                          <MdEditDocument />
                        </button>
                      </td>
                      <td data-label="Eliminar">
                        <button className={fasdatecOne.commu__btn__delete__action} 
                          onClick={() => deleteUser(dataUser.id)}
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateClients;
