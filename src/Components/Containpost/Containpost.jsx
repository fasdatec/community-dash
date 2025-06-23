import React from 'react'
import fasdatec from './containpost.module.scss'

const Containpost = ({ imagenPost, textPost }) => {
  return (
    <section className={fasdatec.contain__post__card}>
      {imagenPost && <img className={fasdatec.contain__post__img__preview} src={imagenPost} alt="Post image" />}
      <p className={fasdatec.contain__post__text}>{textPost || 'Sin descripción'}</p>
    </section>
  )
}

export default Containpost
