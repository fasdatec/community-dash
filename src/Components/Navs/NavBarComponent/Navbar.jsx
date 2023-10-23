import React, { useRef } from 'react'
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
  const closeSesion = () =>{
    alert('Sesion Rota')
  }
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
        <a href='/Dashboard' className={fasdatec.commu__navbar__logo}>CommuFasda</a>
        <div className={fasdatec.commu__navbar__parr}>
          <ul>
            <li>
              <a className={fasdatec.commu__nabar__none__text} href='/Create'>Publicación</a>
            </li>
            <li>
              <a className={fasdatec.commu__nabar__none__text} href='#'>Suscripciónes</a>
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
                <AiFillDashboard /> <a href="/Dashboard">Inicio</a>
              </li>
              <li>
                <BsCreditCard2FrontFill /> <a href="#">Suscripciónes</a>
              </li>
              <li>
                <AiOutlineFileText /> <a href='/Publicaciones'>Publicaciones</a>
              </li>
              <li>
                <LuCalendarDays /> <a href='/Calendar'>Calendario</a>
              </li>
              <li>
                <IoCreateOutline/> <a href='/Create'>Crear Publicación</a> 
              </li>
              <li>
                <MdOutlinePendingActions /> <a href="">Ver Status</a>
              </li>
              <li>
                <MdTipsAndUpdates /> <a href="/Tips">Tips para Publicar</a>
              </li>
              <li>
                <FaUsers /> <a href="/Users">Usuarios</a>
              </li>
            </ul>
          </div>
          <button type="button" className={fasdatec.commu__sidebar__logout} onClick={closeSesion}>Cerrar Sesión</button>
        </div>
      </div>
    </>
  )
}

export default Navbar