import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../auth/useAuth'
import routes from '../../../assets/helpers/routes'
import fasdatec from './sidebar.module.scss'
import { BsCaretUpSquare, BsCreditCard2FrontFill, BsFillFileTextFill } from 'react-icons/bs'
import { MdAddAlert, MdCalendarMonth, MdCreate, MdCreateNewFolder, MdCrisisAlert, MdOutlineCalendarViewDay, MdOutlineCreate, MdOutlinePendingActions, MdTaxiAlert, MdTipsAndUpdates } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'

const Sidebar = () => {
  const { logout } = useAuth()
  return (
    <>
    <div className={fasdatec.commu__sidebar__general}>
      <div className={fasdatec.commu__sidebar__parr}>
        <ul>
          <li>
            <Link to={routes.publicaciones.suscripciones}><BsCreditCard2FrontFill /> Suscripciones</Link>
          </li>
          <li>
            <Link to={routes.publicaciones.listado}><BsFillFileTextFill/> Publicaciones</Link>
          </li>
          <li>
            <Link to={routes.publicaciones.calendar}><MdCalendarMonth /> Calendario</Link>
          </li>
          <li>
            <Link to={routes.publicaciones.creacion}><MdCreate/> Crear Publicación</Link> 
          </li>
          <li>
            <Link to={routes.publicaciones.verstatus}><MdCrisisAlert/> Ver Status</Link>
          </li>
          <li>
            <Link to={routes.publicaciones.tips}><MdTipsAndUpdates /> Tips para Publicar</Link>
          </li>
          <li>
            <Link to={routes.registros.usuarios} ><FaUsers /> Usuarios</Link>
          </li>
          <li>
            <Link to={routes.registros.clientes} ><FaUsers /> Clientes</Link>
          </li>
        </ul>
      </div>
      <button type="button" className={fasdatec.commu__sidebar__logout} onClick={() => logout()}>Cerrar Sesión</button>
    </div>
    </>
  )
}
export default Sidebar