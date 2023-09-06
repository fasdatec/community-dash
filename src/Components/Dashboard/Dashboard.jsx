import React from 'react'
import Sidebar from '../Navs/SidebarComponent/Sidebar';
import Navbar from '../Navs/NavBarComponent/Navbar';
import fasdatec from './dashboard.module.scss'
const Dashboard = () => {
  return (
    <>
    <section className={fasdatec.section__navigation}>
        <Navbar />
        <Sidebar />
    </section>
    </>
  )
}

export default Dashboard