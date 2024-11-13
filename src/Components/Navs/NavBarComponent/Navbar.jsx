import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
import image from '../../../assets/images/ft.png';
<img src={image} alt="" />

const Navbar = () => {
  const burguerRef = useRef();
  const { logout } = useAuth()
  const menuResponsive = () => {
    burguerRef.current.style.marginLeft !== "-100%" ? (
      burguerRef.current.style.marginLeft = "-100%"
    ) : (
      burguerRef.current.style.marginLeft = "0%"
    )
  }
  return (
    <>
      <div className={fasdatec.commu__navbar__general}>
        <a href={routes.home} className={fasdatec.commu__navbar__logo}>    CommuFasda</a>
        <div className={fasdatec.commu__navbar__parr}>
          <ul>
            <li>
              <Link className={fasdatec.commu__nabar__none__text} to={routes.publicaciones.creacion}>Publicación</Link>
            </li>
            <li>
              <Link className={fasdatec.commu__nabar__none__text} to={routes.publicaciones.suscripciones}>Suscripciones</Link>
            </li>
            <li>
              <img className={fasdatec.img__profile} src={image} alt="" />
              </li>
            <li>
              <a onClick={menuResponsive} className={fasdatec.commu__hamburguer__menu__button}><RxHamburgerMenu /></a>
            </li>
          </ul>
        </div>
        <div className={fasdatec.commu__responsive__nav} ref={burguerRef}>
          <div className={fasdatec.commu__sidebar__parr}>
            <span className={fasdatec.commu__close__responsive}>
              <AiOutlineClose onClick={menuResponsive} />
            </span>
            <ul>
              <li>
                <Link to={routes.home}><AiFillDashboard /> Inicio</Link>
              </li>
              <li>
                <Link to={routes.publicaciones.suscripciones}><BsCreditCard2FrontFill /> Suscripciónes</Link>
              </li>
              <li>
                <Link to={routes.publicaciones.listado}><AiOutlineFileText /> Publicaciones</Link>
              </li>
              <li>
                <Link to={routes.publicaciones.calendar}><LuCalendarDays /> Calendario</Link>
              </li>
              <li>
                <Link to={routes.publicaciones.creacion}><IoCreateOutline /> Crear Publicación</Link>
              </li>
              <li>
                <Link to=""><MdOutlinePendingActions /> Ver Status</Link>
              </li>
              <li>
                <Link to={routes.publicaciones.tips}><MdTipsAndUpdates /> Tips para Publicar</Link>
              </li>
              <li>
                <Link to={routes.registros.usuarios}><FaUsers /> Usuarios</Link>
              </li>
              <li>

                <Link to={routes.registros.clientes}><FaUsers /> Clientes</Link>

              </li>
            </ul>
          </div>
          <button type="button" className={fasdatec.__logout} onClick={() => logout()}>Cerrar Sesión</button>
        </div>
      </div>
    </>
  )
}

export default Navbar