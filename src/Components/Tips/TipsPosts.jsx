import React from 'react'
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar'
import fasdatec from '../Dashboard/dashboard.module.scss';
import fasdatecTips from './tips.module.scss'

const TipsPosts = () => {
  return (
    <>
        <section className={fasdatec.commu__section__post}>
            <div className={fasdatec.commu__section__navigation}>
                <Navbar />
            </div>
            <div className={fasdatec.commu__post}>
                <Sidebar />
                <div className={fasdatec.commu__section__create__post}>
                    <h1>Tips para Publicar</h1>
                    <div className={fasdatecTips.commu__tips__container}>
                        <h2 className={fasdatecTips.commu__tips__title__faq}>¿Qué es Lorem Ipsum?</h2>
                        <p className={fasdatecTips.commu__tips__parr}>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y 
                            los mezcló de tal manera que logró hacer un libro de textos especimen. 
                            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                            quedando esencialmente igual al original. Fue popularizado en los 60s con la 
                            creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, 
                            y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, 
                            el cual incluye versiones de Lorem Ipsum.
                        </p>
                    </div>
                    <div className={fasdatecTips.commu__tips__container}>
                        <h2 className={fasdatecTips.commu__tips__title__faq}>¿Qué es Lorem Ipsum?</h2>
                        <p className={fasdatecTips.commu__tips__parr}>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y 
                            los mezcló de tal manera que logró hacer un libro de textos especimen. 
                            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                            quedando esencialmente igual al original. Fue popularizado en los 60s con la 
                            creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, 
                            y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, 
                            el cual incluye versiones de Lorem Ipsum.
                        </p>
                    </div>
                    <div className={fasdatecTips.commu__tips__container}>
                        <h2 className={fasdatecTips.commu__tips__title__faq}>¿Qué es Lorem Ipsum?</h2>
                        <p className={fasdatecTips.commu__tips__parr}>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y 
                            los mezcló de tal manera que logró hacer un libro de textos especimen. 
                            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                            quedando esencialmente igual al original. Fue popularizado en los 60s con la 
                            creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, 
                            y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, 
                            el cual incluye versiones de Lorem Ipsum.
                        </p>
                    </div>
                    <div className={fasdatecTips.commu__tips__container}>
                        <h2 className={fasdatecTips.commu__tips__title__faq}>¿Qué es Lorem Ipsum?</h2>
                        <p className={fasdatecTips.commu__tips__parr}>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y 
                            los mezcló de tal manera que logró hacer un libro de textos especimen. 
                            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                            quedando esencialmente igual al original. Fue popularizado en los 60s con la 
                            creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, 
                            y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, 
                            el cual incluye versiones de Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TipsPosts