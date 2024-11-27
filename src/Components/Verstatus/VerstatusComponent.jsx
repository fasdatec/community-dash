import React from 'react'
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar'
import fasdatec from '../Dashboard/dashboard.module.scss';
import Verstatus from './VerstatusComponent';
import iglogo from "../../assets/images/iglogo.svg"
import fblogo from "../../assets/images/fbnw.svg"
import tklogo from "../../assets/images/ttnw.svg"
import ytblogo from "../../assets/images/ytnw.svg"
import xlogo from "../../assets/images/xlogo.svg"
import inlogo from "../../assets/images/inlogo.svg"

const VerstatusComponent = () => {
  return (
    <>
    <section className={fasdatec.commu__verstatus__post}>
        <div className={fasdatec.commu__verstatus__navigation}>
          <Navbar />
        </div>
        <div className={fasdatec.commu__verstatus}>
          <Sidebar />
          <div className={fasdatec.commu__verstatus__section}>
            <h1>Ver Estatus</h1>
            <div className={fasdatec.commu__ver__status}>
              <Verstatus titleSocialMedia='Facebook' imglogo={fblogo} />
              <Verstatus titleSocialMedia='Instagram' imglogo={iglogo} />
              <Verstatus titleSocialMedia='TikTok' imglogo={tklogo} />
              <Verstatus titleSocialMedia='YouTube' imglogo={ytblogo} />
              <Verstatus titleSocialMedia='X' imglogo={xlogo} />
              <Verstatus titleSocialMedia='LinkedIn' imglogo={inlogo} />
            </div>
          </div>
        </div>
      </section>
    </>
)

}

export default VerstatusComponent