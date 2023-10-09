import React from 'react'
import fasdatec from './post.module.scss'
import Buttonyellow from '../Buttons/Buttons'
import Containpost from '../Containpost/Containpost'
import Apple from '../../assets/images/apple.png'

const Post = () => {
  return (
    <>
      <section className={fasdatec.commu__section__content}>
        <div className={fasdatec.commu__title__button}>
          <h1 className={fasdatec.commu__section__title__post}>CONTENIDO</h1>
        <div className={fasdatec.commu__post__header__button}>
          <Buttonyellow titleButton='Crear idea' direction='#'/>
          <Buttonyellow titleButton='Asignados para mi' direction='#'/>
        </div>
        </div>
        <div className={fasdatec.commu__section__content__post}>
          <Containpost 
            imagenPost={Apple}
            textPost='Ejemplo'/>        
        </div>
      </section>
    </>
  )
}
export default Post