// C:\repositorios\community-dash\src\Components\MisPublicaciones\MisPublicaciones.jsx

import React from "react";
import Sidebar from "../Navs/SidebarComponent/Sidebar";
import Navbar from "../Navs/NavBarComponent/Navbar";
import fasdatec from '../Dashboard/dashboard.module.scss';

// CORRECCIÓN: Añadir la extensión .jsx explícitamente a la importación
import ListPostWrapper from '../Post/ListPostWrapper.jsx'; // <--- ¡CAMBIO AQUÍ!


const MisPublicaciones = () => {
    const defaultSocialMedia = "facebook"; 

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
                    <ListPostWrapper socialMedia={defaultSocialMedia} /> 
                </div>
            </div>
        </section>
        </>
    )
}
export default MisPublicaciones;