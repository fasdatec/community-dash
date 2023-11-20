import React, { useRef } from 'react';
import useAuth from '../../auth/useAuth';
import routes from '../../../assets/helpers/routes';
import fasdatec from './navbar.module.scss';
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCreateOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { AiOutlineFileText, AiFillDashboard, AiOutlineClose } from 'react-icons/ai'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { MdOutlinePendingActions, MdTipsAndUpdates } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'

const Navbar = () => {
  const burguerRef = useRef();
  const { logout } = useAuth()
  const menuResponsive = () =>{
    burguerRef.current.style.marginLeft !== "-100%" ? (
      burguerRef.current.style.marginLeft = "-100%"
      ) : (
        burguerRef.current.style.marginLeft = "0%"
      )
  }
  return (
    <>
      <div className={fasdatec.commu__navbar__general}>
        <a href={routes.home} className={fasdatec.commu__navbar__logo}>CommuFasda</a>
        <div className={fasdatec.commu__navbar__parr}>
          <ul>
            <li>
              <a className={fasdatec.commu__nabar__none__text} href={routes.publicaciones.creacion}>Publicación</a>
            </li>
            <li>
              <a className={fasdatec.commu__nabar__none__text} href={routes.publicaciones.suscripciones}>Suscripciónes</a>
            </li>
            <li>
              <a onClick={menuResponsive} className={fasdatec.commu__hamburguer__menu__button}><RxHamburgerMenu/></a>
            </li>
          </ul>
        </div>
        <div className={fasdatec.commu__responsive__nav} ref={burguerRef}>
          <div className={fasdatec.commu__sidebar__parr}>
            <span className={fasdatec.commu__close__responsive}>
              <AiOutlineClose onClick={menuResponsive}/>
            </span>
            <ul>
              <li>
                <a href={routes.home}><AiFillDashboard /> Inicio</a>
              </li>
              <li>
                <a href={routes.publicaciones.suscripciones}><BsCreditCard2FrontFill /> Suscripciónes</a>
              </li>
              <li>
                <a href={routes.publicaciones.listado}><AiOutlineFileText /> Publicaciones</a>
              </li>
              <li>
                <a href={routes.publicaciones.calendar}><LuCalendarDays /> Calendario</a>
              </li>
              <li>
                <a href={routes.publicaciones.creacion}><IoCreateOutline/> Crear Publicación</a> 
              </li>
              <li>
                <a href=""><MdOutlinePendingActions /> Ver Status</a>
              </li>
              <li>
                <a href={routes.publicaciones.tips}><MdTipsAndUpdates /> Tips para Publicar</a>
              </li>
              <li>
                <a href={routes.registros.usuarios}><FaUsers /> Usuarios</a>
              </li>
            </ul>
          </div>
          <button type="button" className={fasdatec.commu__sidebar__logout} onClick={() => logout()}>Cerrar Sesión</button>
        </div>
      </div>
    </>
  )
}

export default Navbar