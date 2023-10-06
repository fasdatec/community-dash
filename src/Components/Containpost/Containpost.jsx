import React from 'react'
import fasdatec from './containpost.module.scss'

const Containpost = ({imagenPost, textPost}) => {
  return (
    <>
    <section className={fasdatec.contain__post__card}>
      <img className={fasdatec.contain__post__img__preview} src={imagenPost}/>
      <p className={fasdatec.contain__post__text}>{textPost}</p>
    </section>
    </>
  )
}
export default Containpost