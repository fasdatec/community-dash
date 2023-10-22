import React from 'react'
import fasdatec from './navbar.module.scss';
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  const MeunResponsive = () =>{
    alert('Esto debe de ser Responsive')
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
            <a onClick={MeunResponsive} className={fasdatec.commu__hamburguer__menu__button}><RxHamburgerMenu/></a>
          </li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Navbar