  import React from 'react'
  import { useNavigate } from "react-router-dom";
  import Navbar from '../Navs/NavBarComponent/Navbar'
  import Sidebar from '../Navs/SidebarComponent/Sidebar'
  import fasdatec from '../Dashboard/dashboard.module.scss'
  import fasdatecOne from './postsactions.module.scss'
  import Swal from 'sweetalert2';
  import withReactContent from 'sweetalert2-react-content';

  const FormPost = ({ socialMedia }) => {  // <-- recibe prop socialMedia
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const cancelProcess = () =>{
      // ... tu código Swal para cancelar (igual)
    }

    const doneProcess = async () => {
      const titulo = document.getElementById('titulo').value;
      const marca = document.getElementById('Marca').value;
      const encabezado = document.getElementById('encabezado').value;
      const texto = document.getElementById('texto').value;
      const archivo = document.getElementById('video-imagen').files[0];

      if (!titulo || !marca || !encabezado || !texto || !archivo) {
        MySwal.fire({
          title: 'Todos los campos son obligatorios',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
        return;
      }

      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('marca', marca);
      formData.append('encabezado', encabezado);
      formData.append('texto', texto);
      formData.append('archivo', archivo);  
      formData.append('socialMedia', socialMedia);  // <-- usa la prop

      try {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });

    if (response.status === 401 || response.status === 403) {
      // Token inválido o expirado
      localStorage.removeItem('token');
      MySwal.fire({
        title: 'Sesión expirada',
        text: 'Inicia sesión de nuevo.',
        icon: 'warning',
        confirmButtonText: 'Ir al Login'
      }).then(() => {
        navigate('/login');
      });
      return;
    }

    if (!response.ok) {
      throw new Error('Error al crear el post');
    }

    MySwal.fire({
      title: 'Publicación Creada',
      showConfirmButton: false,
      allowOutsideClick: false,
      color: '#fff',
      width: '80%',
      padding: '3em',
      background: "rgba(18, 18, 43, 0.92)",
      backdrop: 'rgba(6, 6, 46, 0.877)',
      icon: 'success',
      timer: 2500
    });

    setTimeout(() => {
      navigate('/listpost');
    }, 2500);
  } catch (error) {
    console.error(error);
    MySwal.fire({
      title: 'Ocurrió un error al guardar el post',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

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

  export default FormPost;
