import React from 'react'
import useAuth from '../../auth/useAuth'
import fasdatec from './sidebar.module.scss'
import { IoCreateOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { AiOutlineFileText } from 'react-icons/ai'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { MdOutlinePendingActions, MdTipsAndUpdates } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import routes from '../../../assets/helpers/routes'

const Sidebar = () => {
  const { logout } = useAuth()
  return (
    <>
    <div className={fasdatec.commu__sidebar__general}>
      <div className={fasdatec.commu__sidebar__parr}>
        <ul>
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
    </>
  )
}
export default Sidebar