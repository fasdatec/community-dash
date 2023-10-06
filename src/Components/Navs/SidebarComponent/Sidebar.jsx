import React from 'react'
import fasdatec from './sidebar.module.scss'
import { IoCreateOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { AiOutlineFileText } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'
import { MdNotificationsActive } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <>
    <div className={fasdatec.commu__sidebar__general}>
      <div className={fasdatec.commu__sidebar__parr}>
        <ul>
          <li><IoCreateOutline/> <a href='#'>Crear</a></li>
          <li><LuCalendarDays /> <a href='#'>Calendario</a></li>
          <li><AiOutlineFileText /> <a href='#'>Borradores</a></li>
          <li><TbWorld /> <a href='#'>Canales</a></li>
          <li><MdNotificationsActive /> <a href='#'>Notificaciones</a></li>
          <li><a className={fasdatec.commu__sidebar__button}href='#'>Cambiar marca</a> <BiSolidRightArrow /></li>
        </ul>
      </div>
      
    </div>
    </>
  )
}

export default Sidebar