import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar';
import fasdatec from '../Dashboard/dashboard.module.scss';
import fasdatecOne from './usersactions.module.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CreateUsers = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const options = ['Administrador','CM','Desing'];
  const cancelProcess = () =>{
    MySwal.fire({
      title: `¿Estas seguro que deseas cancelar la creación del Usuario?`,
      width: '80%',
      padding: '3em',
      icon: 'warning',
      color:'#fff',
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
          color:'#fff',
          width: '80%',
          padding: '3em',
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'success',
          timer:2500
        });
        navigate(`/Dashboard`)
      } else if (result.isDenied) {
        MySwal.fire({
          title: 'Puedes Seguir creando a tu usuario',
          showConfirmButton: false,
          color:'#fff',
          width: '80%',
          padding: '3em',
          allowOutsideClick: false,
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'warning',
          timer:2500
        });
      }
    })
  }
  const doneProcess = () =>{
    MySwal.fire({
      title: `¿Estas seguro de crear al usuario?`,
      width: '80%',
      padding: '3em',
      icon: 'warning',
      color:'#fff',
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
          title: 'Usuario Creado',
          showConfirmButton: false,
          allowOutsideClick: false,
          color:'#fff',
          width: '80%',
          padding: '3em',
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'success',
          timer:2500
        });
      } else if (result.isDenied) {
        MySwal.fire({
          title: 'Puedes Seguir creando a tu usuario',
          showConfirmButton: false,
          color:'#fff',
          width: '80%',
          padding: '3em',
          allowOutsideClick: false,
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'warning',
          timer:2500
        });
      }
    })
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
              <div >{/*formu*/}
                <div className={fasdatecOne.commu__flexrow__form}>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="mail" className={fasdatecOne.commu__creation__label}>Correo Electronico</label>
                    <input type="email" id='mail' className={fasdatecOne.commu__creation__input} placeholder='Correo Electronico'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="name" className={fasdatecOne.commu__creation__label}>Nombre de Acceso</label>
                    <input type="text" id='name' className={fasdatecOne.commu__creation__input} placeholder='Nombre de Acceso'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="name" className={fasdatecOne.commu__creation__label}>Rol del Usuario</label>
                    <select className={fasdatecOne.commu__creation__input} name="rol">
                      <option>Elige una Opción</option>
                        {options.map((strong, index) => {
                          return <option key={index} > {strong} </option>
                      })}
                    </select>
                  </div>
                </div>
                <div className={fasdatecOne.commu__flexbtn}>
                  <input type="button" onClick={cancelProcess} className={fasdatecOne.commu__btn__cancel} value="Cancelar" />
                  <input type="button" onClick={doneProcess} className={fasdatecOne.commu__btn__send} value="Crear Usuario" />
                </div>
              </div>{/*formu*/}
              <h2 className={fasdatecOne.commu__form__subtitleOne}>Listado de Usuarios</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateUsers