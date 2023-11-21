import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../auth/useAuth'
import routes from '../../../assets/helpers/routes'
import fasdatec from './sidebar.module.scss'
import { IoCreateOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { AiOutlineFileText } from 'react-icons/ai'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { MdOutlinePendingActions, MdTipsAndUpdates } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'

const Sidebar = () => {
  const { logout } = useAuth()
  return (
    <>
    <div className={fasdatec.commu__sidebar__general}>
      <div className={fasdatec.commu__sidebar__parr}>
        <ul>
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
            <Link to={routes.publicaciones.creacion}><IoCreateOutline/> Crear Publicación</Link> 
          </li>
          <li>
            <Link href=""><MdOutlinePendingActions /> Ver Status</Link>
          </li>
          <li>
            <Link to={routes.publicaciones.tips}><MdTipsAndUpdates /> Tips para Publicar</Link>
          </li>
          <li>
            <Link to={routes.registros.usuarios} ><FaUsers /> Usuarios</Link>
          </li>
        </ul>
      </div>
      <button type="button" className={fasdatec.commu__sidebar__logout} onClick={() => logout()}>Cerrar Sesión</button>
    </div>
    </>
  )
}
export default Sidebar