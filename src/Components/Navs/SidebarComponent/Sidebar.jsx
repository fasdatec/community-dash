import React from 'react'
import fasdatec from './sidebar.module.scss'
import { IoCreateOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { AiOutlineFileText } from 'react-icons/ai'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { MdOutlinePendingActions, MdTipsAndUpdates } from 'react-icons/md'

const Sidebar = () => {
  return (
    <>
    <div className={fasdatec.commu__sidebar__general}>
      <div className={fasdatec.commu__sidebar__parr}>
        <ul>
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
        </ul>
      </div>
    </div>
    </>
  )
}
export default Sidebar