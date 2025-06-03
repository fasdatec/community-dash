import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar'
import fasdatec from '../Dashboard/dashboard.module.scss'
import fasdatecOne from './postsactions.module.scss'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const FormPost = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const cancelProcess = () =>{
    MySwal.fire({
      title: `¿Estas seguro que deseas cancelar el post?`,
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
        navigate(`/createpost`)
      } else if (result.isDenied) {
        MySwal.fire({
          title: 'Puedes Seguir creando tu publicación',
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
      title: `¿Estas seguro de crear el post?`,
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
          title: 'Publicación Creada',
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
          title: 'Puedes Seguir creando tu publicación',
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
          <h1>Creación de Post para una red social</h1>
          <div className={fasdatecOne.commu__section__form__container}>
            <h2 className={fasdatecOne.commu__form__subtitle}>Ingresa los Datos que se piden</h2>
            <div>
  <div className={fasdatecOne.commu__flexrow__form}>
    <div className={fasdatecOne.commu__flexclm__form}>
      <label htmlFor="titulo" className={fasdatecOne.commu__creation__label}>Titulo</label>
      <input type="text" id='titulo' className={fasdatecOne.commu__creation__input} placeholder='Titulo'/>
    </div>
    <div className={fasdatecOne.commu__flexclm__form}>
      <label htmlFor="Marca" className={fasdatecOne.commu__creation__label}>Marca</label>
      <input type="text" id='Marca' className={fasdatecOne.commu__creation__input} placeholder='Marca'/>
    </div>
    <div className={fasdatecOne.commu__flexclm__form}>
    <label htmlFor="encabezado" className={fasdatecOne.commu__creation__label}>Encabezado</label>
    <input type="text" id='encabezado' className={fasdatecOne.commu__creation__input} placeholder='encabezado'/>
  </div>
  <div className={fasdatecOne.commu__flexclm__form}>
    <label htmlFor="texto" className={fasdatecOne.commu__creation__label}>Texto</label>
    <input type="text" id='texto' className={fasdatecOne.commu__creation__input} placeholder='texto'/>
  </div>
  <div className={fasdatecOne.commu__flexclm__form}>
    <label htmlFor="video-imagen" className={fasdatecOne.commu__creation__label}>Video o Imagen</label>
    <input type="file" id='video-imagen' className={fasdatecOne.commu__creation__input} placeholder='video-imagen'/>
  </div>
 
  </div>
  <div className={fasdatecOne.commu__flexbtn}>
    <input type="button" onClick={cancelProcess} className={fasdatecOne.commu__btn__cancel} value="Cancelar" />
    <input type="button" onClick={doneProcess} className={fasdatecOne.commu__btn__send} value="Crear Post" />
  </div>
  
</div>


          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FormPost