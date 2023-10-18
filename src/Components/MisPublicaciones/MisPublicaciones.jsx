import React from "react";
import Sidebar from "../Navs/SidebarComponent/Sidebar";
import Navbar from "../Navs/NavBarComponent/Navbar";
import fasdatec from '../Dashboard/dashboard.module.scss';
import Post from "../Post/Post";

const MisPublicaciones = () => {
return (
    <>
    <section className={fasdatec.commu__section__post}>
        <div className={fasdatec.commu__section__navigation}>
          <Navbar />
        </div>
        <div className={fasdatec.commu__post}>
          <Sidebar />
          <div className={fasdatec.commu__mis__publicaciones}>
            <h1>Mis publicaciones</h1>
            <Post />
          </div>
        </div>
      </section>
    </>
)
}
export default MisPublicaciones