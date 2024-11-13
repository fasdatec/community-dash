import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEditDocument, MdSave, MdCancel } from "react-icons/md";
import routes from "../../assets/helpers/routes";
import instance from "../../assets/api/axios";
import Navbar from "../Navs/NavBarComponent/Navbar";
import Sidebar from "../Navs/SidebarComponent/Sidebar";
import fasdatec from "../Dashboard/dashboard.module.scss";
import fasdatecOne from "./clientsactions.module.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CreateClients = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const options = [
    "Facebock",
    "Instagram",
    "TikTok",
    "YouTube",
    "X",
    "LinkedIn",
  ];
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const cancelProcess = () => {
    // Función cancelProcess
  };
  const doneProcess = () => {
    // Función doneProcess
  };
  const [userData, setUserData] = useState([]);
  const getUsersInfo = async () => {
    // Función getUsersInfo
  };
  useEffect(() => {
    getUsersInfo();
  }, []);
  const updateClient = () => {
    // Función updateClient
  };
  const deleteUser = async (id) => {
    // Función deleteUser
  };
  const editClient = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
  };
  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentUser({});
  };
  const saveEdit = () => {
    // Función saveEdit
    setIsEditing(false);
    setCurrentUser({});
  };

  // Función para manejar la acción de editar
  const handleEdit = () => {
    setIsEditing(true);
  };

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
              {/* Formulario de creación de clientes */}
              {!isEditing && (
                <div>
                  <h2 className={fasdatecOne.commu__form__subtitle}>
                    Ingresa los Datos que se piden
                  </h2>
                  <div className={fasdatecOne.commu__flexrow__form}>
                    <div className={fasdatecOne.commu__flexclm__form}>
                      <label
                        htmlFor="name"
                        className={fasdatecOne.commu__creation__label}
                      >
                        Nombre de Cliente
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={fasdatecOne.commu__creation__input}
                        placeholder="Usuario"
                      />
                    </div>
                    <div className={fasdatecOne.commu__flexclm__form}>
                      <label
                        htmlFor="name"
                        className={fasdatecOne.commu__creation__label}
                      >
                        Tipo de Red Social
                      </label>
                      <select
                        className={fasdatecOne.commu__creation__input}
                        name="social"
                      >
                        <option>Elige una Opción</option>
                        {options.map((strong, index) => {
                          return <option key={index}> {strong} </option>;
                        })}
                      </select>
                    </div>
                    <div className={fasdatecOne.commu__flexclm__form}>
                      <label
                        htmlFor="name"
                        className={fasdatecOne.commu__creation__label}
                      >
                        Usuario
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={fasdatecOne.commu__creation__input}
                        placeholder="Usuario Encargado"
                      />
                    </div>
                  </div>
                  <div className={fasdatecOne.commu__flexbtn}>
                    <input
                      type="button"
                      onClick={cancelProcess}
                      className={fasdatecOne.commu__btn__cancel}
                      value="Cancelar"
                    />
                    <input
                      type="button"
                      onClick={doneProcess}
                      className={fasdatecOne.commu__btn__send}
                      value="Crear Cliente"
                    />
                  </div>
                </div>
              )}
              <h2 className={fasdatecOne.commu_form_subtitleOne}>
                Listado de Clientes
              </h2>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Nombre de Cliente</th>
                    <th scope="col">Tipo de red Social</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                  </tr>
                </thead>
                {userData.length > 0 ? (
                <tbody>
                  {userData.map((dataUser) => (
                    <tr key={dataUser.id}>
                      <td data-label="Nombre">{dataUser.username}</td>
                      <td data-label="Rol">{dataUser.rol.toUpperCase()}</td>
                      <td data-label="Editar">
                        <button
                          className={fasdatecOne.commu__btn__update__action}
                          onClick={handleEdit}
                        >
                          <MdEditDocument />
                        </button>
                      </td>
                      <td data-label="Eliminar">
                        <button
                          className={fasdatecOne.commu_btndelete_action}
                          onClick={() => deleteCLIENTS(dataUser.id)}
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                ) : (<tbody>
                    <tr>
                      <td colSpan="5" className={fasdatecOne.commu_no_data}>
                        No hay clientes creados.
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
              <button
        className={fasdatecOne.commu__btn__update__action}
        onClick={handleEdit}
      >
        <MdEditDocument />
      </button>
              {/* Formulario de edición de clientes */}
              {isEditing && (
                <div>
                  <h2 className={fasdatecOne.commu__form__subtitle}>
                    Editar Cliente
                  </h2>
                  {/* Aquí va el formulario de edición */}
                  {/* Por ejemplo: */}
                  
                  <div className={fasdatecOne.commu__flexrow__form}>
                    <div className={fasdatecOne.commu__flexclm__form}>
                      <label
                        htmlFor="name"
                        className={fasdatecOne.commu__creation__label}
                      >
                        Nombre de Cliente
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={fasdatecOne.commu__creation__input}
                        placeholder="Usuario"
                      />
                    </div>
                    <div className={fasdatecOne.commu__flexclm__form}>
                      <label
                        htmlFor="name"
                        className={fasdatecOne.commu__creation__label}
                      >
                        Tipo de Red Social
                      </label>
                      <select
                        className={fasdatecOne.commu__creation__input}
                        name="social"
                      >
                        <option>Elige una Opción</option>
                        {options.map((strong, index) => {
                          return <option key={index}> {strong} </option>;
                        })}
                      </select>
                    </div>
                    <div className={fasdatecOne.commu__flexclm__form}>
                      <label
                        htmlFor="name"
                        className={fasdatecOne.commu__creation__label}
                      >
                        Usuario
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={fasdatecOne.commu__creation__input}
                        placeholder="Usuario Encargado"
                      />
                    </div>
                  </div>
                  <button className={fasdatecOne.commu__btn__update__action}
                    onClick={saveEdit}
                    value="Guardar Cambios"
                  ><MdSave/></button>
                  <button className={fasdatecOne.commu__btn__update__action}
                    onClick={cancelEdit}
                    value="Cancelar"
                  > <MdCancel/></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateClients;
