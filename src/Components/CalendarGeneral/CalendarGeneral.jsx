import React from 'react'
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar'
import fasdatec from '../Dashboard/dashboard.module.scss';
import Calendar from '../CalendarFullcalendar/CalendarMain';

const CalendarGeneral = () => {
  return (
    <>
    <section className={fasdatec.commu__section__post}>
        <div className={fasdatec.commu__section__navigation}>
            <Navbar />
        </div>
        <div className={fasdatec.commu__post}>
            <Sidebar />
            <div className={fasdatec.commu__calendar}>
            <h1>Calendario</h1>
              <Calendar />
            </div>
        </div>
    </section>
    </>
  )
}
export default CalendarGeneral