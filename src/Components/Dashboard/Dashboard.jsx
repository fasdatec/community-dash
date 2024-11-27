import React from 'react'
import Sidebar from '../Navs/SidebarComponent/Sidebar';
import Navbar from '../Navs/NavBarComponent/Navbar';
import Post from '../Post/Post'
import fasdatec from './dashboard.module.scss'

const Dashboard = () => {
  return (
    <>
    <section className={fasdatec.commu__section__post}>
      <div className={fasdatec.commu__section__navigation}>
        <Navbar />
      </div>
      <div className={fasdatec.commu__post}>
      <div className={fasdatec.commu__verstatus}>
        <Sidebar />
      </div> 
      </div>
    </section>
    </>
  )
}
export default Dashboard