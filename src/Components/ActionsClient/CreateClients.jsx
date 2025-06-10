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

  // --- Estados para el formulario de CREACIÓN de clientes (SOLO LOS DE LA IMAGEN) ---
  const [clientName, setClientName] = useState('');
  const [socialNetwork, setSocialNetwork] = useState('');
  // Asumimos que 'userNameEncargado' es el 'user_id' que se le asigna al cliente
  // y que su 'rol' será el 'userRole' del cliente.
  const [userNameEncargado, setUserNameEncargado] = useState('');
  const [formError, setFormError] = useState('');

  // --- Estados para la LISTA de clientes (datos que mostrará la tabla) ---
  const [clientsData, setClientsData] = useState([]);

  // Opciones para el select de Red Social (del modelo Client)
  const socialNetworkOptions = ['Facebook', 'Instagram', 'TikTok', 'YouTube', 'X', 'LinkedIn'];

  // --- Función para cancelar el proceso de creación (sin cambios) ---
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
        navigate(routes.home);
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
    });
  };

  // --- Función para CREAR un cliente (AJUSTADA A LOS CAMPOS VISIBLES y URLs singularizadas) ---
  const doneProcess = async () => {
    // 1. Validaciones básicas del formulario en el frontend
    if (!clientName || !socialNetwork || !userNameEncargado) {
      setFormError('Los campos "Nombre de Cliente", "Tipo de Red Social" y "Usuario Encargado" son requeridos.');
      return;
    }
    setFormError('');

    // 2. Confirmación antes de enviar
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Datos a enviar al backend
          // Importante: Tu modelo Client.js y client.controller.js esperan 'id_page' y 'user_id'.
          // Como no se piden en el UI de la imagen, los generamos aquí con valores dummy.
          // SI NECESITAS ESTOS VALORES REALES, DEBERÁS AÑADIRLOS AL FORMULARIO.
          const clientData = {
            name: clientName,
            socialNetwork: socialNetwork,
            userName: userNameEncargado, // Corresponde al campo 'userName' del modelo Client
            id_page: `temp-id-${Date.now()}`, // Generar un ID de página temporal único
            user_id: "66649f874c76b91c8942b03e", // ID de un usuario existente en tu DB (¡CAMBIAR A UN ID REAL!)
          };
          console.log('Enviando datos de cliente (simplificado):', clientData);

          // ¡CAMBIO CLAVE AQUÍ: '/client/add' en singular!
          const response = await instance.post('/client/add', clientData);

          console.log('Respuesta del servidor al crear cliente:', response.data);

          // Mostrar mensaje de éxito
          MySwal.fire({
            title: 'Cliente Creado Correctamente',
            text: response.data.message || 'El cliente ha sido añadido a la lista',
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

          // Limpiar los campos del formulario
          setClientName('');
          setSocialNetwork('');
          setUserNameEncargado('');
          setFormError('');

          // Actualizar la lista de clientes
          getClientsInfo();

        } catch (error) {
          console.error('❌ Error al crear cliente (desde el catch del frontend):', error);
          const errorMessage = error.response?.data?.message || 'Error desconocido al crear cliente. Verifica los datos e intenta nuevamente.';

          MySwal.fire({
            title: 'Error al crear cliente',
            text: errorMessage,
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
    });
  };

  // --- Función para manejar la LISTA de clientes (URLs singularizadas) ---
  const getClientsInfo = async () => {
    try {
      // ¡CAMBIO CLAVE AQUÍ: '/client/' en singular!
      const response = await instance.get('/client/'); 
      
      const clients = response.data.clients; 

      console.log('Clientes obtenidos (simplificado):', clients);

      if (clients) {
        setClientsData(clients);
      } else {
        console.error('No se encontraron clientes en la respuesta');
        setClientsData([]);
      }
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      const errorMessage = error.response?.data?.message || 'Error al cargar clientes. Intenta de nuevo más tarde.';
      MySwal.fire({
        title: 'Error al cargar clientes',
        text: errorMessage,
        showConfirmButton: true,
        allowOutsideClick: true,
        color: '#fff',
        background: "rgba(18, 18, 43, 0.92)",
        backdrop: 'rgba(6, 6, 46, 0.877)',
        confirmButtonColor: '#ffb727',
        icon: 'error'
      });
    }
  };

  // Efecto para cargar clientes al iniciar el componente
  useEffect(() => {
    getClientsInfo();
    // No necesitamos usersForAssignment ni fetchUsersForAssignment si no hay select de usuario
  }, []);

  // --- Función para ACTUALIZAR un cliente (AJUSTADA A LOS CAMPOS VISIBLES y URLs singularizadas) ---
  const updateClient = async (clientToUpdate, refreshClients) => {
    MySwal.fire({
      title: 'Actualizar Cliente',
      html: `
        <input id="swal-clientname" class="swal2-input" placeholder="Nombre de Cliente" value="${clientToUpdate.name || ''}">
        <select id="swal-socialnetwork" class="swal2-input">
          ${socialNetworkOptions.map(option => `<option value="${option}" ${clientToUpdate.socialNetwork === option ? 'selected' : ''}>${option}</option>`).join('')}
        </select>
        <input id="swal-username" class="swal2-input" placeholder="Usuario Encargado" value="${clientToUpdate.userName || ''}">
        `,
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar',
      background: "rgba(18, 18, 43, 0.92)",
      backdrop: 'rgba(6, 6, 46, 0.877)',
      color: '#fff',
      preConfirm: () => {
        const name = document.getElementById('swal-clientname').value.trim();
        const socialNetwork = document.getElementById('swal-socialnetwork').value.trim();
        const userName = document.getElementById('swal-username').value.trim();
        
        if (!name || !socialNetwork || !userName) {
          Swal.showValidationMessage('Los campos "Nombre de Cliente", "Red Social" y "Usuario Encargado" son obligatorios');
          return false;
        }

        // Devolvemos solo los campos que están en el formulario.
        // Asegúrate que tu backend maneje la actualización de solo los campos que recibe.
        return {
          name,
          socialNetwork,
          userName,
          // user_id y id_page no se modifican desde este UI,
          // si el backend los requiere, asegúrate que permita la actualización parcial
          // o que los conserve.
        };
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // ¡CAMBIO CLAVE AQUÍ: '/client/update/' en singular!
          const response = await instance.put(`/client/update/${clientToUpdate._id}`, result.value);

          MySwal.fire({
            title: "¡Cliente Actualizado!",
            text: response.data.message || "Cliente actualizado correctamente",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            background: "rgba(18, 18, 43, 0.92)",
            backdrop: 'rgba(6, 6, 46, 0.877)',
            color: '#fff',
          });

          refreshClients();

        } catch (error) {
          console.error('Error al actualizar cliente:', error);
          const errorMessage = error.response?.data?.message || "No se pudo actualizar el cliente";
          MySwal.fire({
            title: "Error",
            text: errorMessage,
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

  // --- Función para ELIMINAR un cliente (URLs singularizadas) ---
  const deleteClient = async (idToDelete) => {
    MySwal.fire({
      title: `¿Estás seguro de eliminar este cliente?`,
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
        console.log("¡Confirmación de eliminación aceptada! ID a eliminar:", idToDelete);
        try {
          // ¡CAMBIO CLAVE AQUÍ: '/client/delete/' en singular!
          await instance.delete(`/client/delete/${idToDelete}`);

          MySwal.fire({
            title: 'Cliente eliminado correctamente',
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

          // Remover el cliente eliminado de la lista local
          setClientsData(prevClients => prevClients.filter(client => client._id !== idToDelete));

        } catch (error) {
          console.error('❌ Error al eliminar cliente (desde el catch del frontend):', error.response?.data || error.message || error);
          const errorMessage = error.response?.data?.message || 'Error al eliminar cliente. No se pudo eliminar el cliente.';
          MySwal.fire({
            title: 'Error al eliminar cliente',
            text: errorMessage,
            icon: 'error',
            timer: 2000,
            showConfirmButton: false,
            allowOutsideClick: true,
            color: '#fff',
            width: '60%',
            padding: '1em',
            background: "rgba(18, 18, 43, 0.92)",
            backdrop: 'rgba(6, 6, 46, 0.877)',
            confirmButtonColor: '#ffb727',
          });
        }
      } else if (result.isDenied) {
        console.log("Eliminación cancelada por el usuario.");
        MySwal.fire({
          title: 'Puedes seguir gestionando clientes',
          showConfirmButton: false,
          allowOutsideClick: true,
          color: '#fff',
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          timer: 1500,
          icon: 'info'
        });
      } else if (result.dismiss === Swal.DismissReason.backdrop || result.dismiss === Swal.DismissReason.esc) {
        console.log("Eliminación descartada (modal cerrado sin acción).");
      }
    });
  };

  // --- Renderización del componente ---
  return (
    <>
      <section className={fasdatec.commu__section__post}>
        <div className={fasdatec.commu__section__navigation}>
          <Navbar />
        </div>
        <div className={fasdatec.commu__post}>
          <Sidebar />
          <div className={fasdatec.commu__section__create__post}>
            <h1>Creación y Gestión de Clientes</h1>
            <div className={fasdatecOne.commu__section__form__container}>
              <h2 className={fasdatecOne.commu__form__subtitle}>Ingresa los Datos que se piden</h2>
              <div>{/*form*/}
                <div className={fasdatecOne.commu__flexrow__form}>
                  {/* Nombre de Cliente */}
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="clientName" className={fasdatecOne.commu__creation__label}>Nombre de Cliente</label>
                    <input
                      type="text"
                      id='clientName'
                      className={fasdatecOne.commu__creation__input}
                      placeholder='Nombre del Cliente'
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
                  {/* Tipo de Red Social */}
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="socialNetwork" className={fasdatecOne.commu__creation__label}>Tipo de Red Social</label>
                    <select
                      className={fasdatecOne.commu__creation__input}
                      name="socialNetwork"
                      id="socialNetwork"
                      value={socialNetwork}
                      onChange={(e) => setSocialNetwork(e.target.value)}
                    >
                      <option value="">Elige una Opción</option>
                      {socialNetworkOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  {/* Usuario Encargado */}
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="userNameEncargado" className={fasdatecOne.commu__creation__label}>Usuario</label>
                    <input
                      type="text"
                      id='userNameEncargado'
                      className={fasdatecOne.commu__creation__input}
                      placeholder='Usuario Encargado'
                      value={userNameEncargado}
                      onChange={(e) => setUserNameEncargado(e.target.value)}
                    />
                  </div>
                  {/* NOTA: id_page y user_id no se muestran en el formulario según la imagen.
                      Se generan con valores dummy en doneProcess. Si son requeridos por tu backend
                      de forma real, DEBERÁS añadir campos para ellos en el UI. */}
                </div>
                {formError && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{formError}</p>}
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
                    <th scope="col">Rol de Usuario</th> {/* Asumo que este es el rol del 'Usuario Encargado' */}
                    <th scope="col">Actualizar</th>
                    <th scope="col">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {clientsData && clientsData.length > 0 ? (
                    clientsData.map((client) => (
                      <tr key={client._id}> {/* Usar client._id para la key */}
                        <td data-label="Nombre">{client.name || '—'}</td>
                        {/* Asumo que 'Rol de Usuario' es client.userRole (del modelo Client) */}
                        {/* Si en tu backend estás poblando user_id, puedes usar client.user_id?.rol.toUpperCase() */}
                        <td data-label="Rol de Usuario">{client.userRole?.toUpperCase() || 'N/A'}</td>
                        <td data-label="Actualizar">
                          <button className={fasdatecOne.commu__btn__update__action}
                            onClick={() => updateClient(client, getClientsInfo)}
                          >
                            <MdEditDocument />
                          </button>
                        </td>
                        <td data-label="Eliminar">
                          <button className={fasdatecOne.commu__btn__delete__action}
                            onClick={() => deleteClient(client._id)}
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '15px' }}>No hay clientes disponibles.</td>
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

export default CreateClients;