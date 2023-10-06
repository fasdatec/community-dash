import React from 'react'
import fasdatec from './navbar.module.scss';
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <>
      <div className={fasdatec.commu__navbar__general}>
        <a href='' className={fasdatec.commu__navbar__logo}>CommuFasda</a>
      <div className={fasdatec.commu__navbar__parr}>
        <ul>
          <li><a className={fasdatec.commu__hamburguer__menu__button}><RxHamburgerMenu/></a></li>
          <li><a href='#'>Publicación</a></li>
          <li><a href='#'>Planes</a></li>
          <li><a href='#'>Ayuda</a></li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Navbar