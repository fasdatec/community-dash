import React from 'react'
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar'
import fasdatec from '../Dashboard/dashboard.module.scss';

const CalendarGeneral = () => {
  return (
    <>
    <section className={fasdatec.commu__section__post}>
        <div className={fasdatec.commu__section__navigation}>
            <Navbar />
        </div>
        <div className={fasdatec.commu__post}>
            <Sidebar />
            <h1>Calendario</h1>
        </div>
    </section>
    </>
  )
}
export default CalendarGeneral