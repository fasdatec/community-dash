import React from 'react'
import fasdatec from './buttons.module.scss'

export const Buttonyellow = ({titleButton, direction}) => {
  return (
    <>
      <a className={fasdatec.commu__button__yellow} href={direction}>{titleButton}</a>
    </>
  )
}

export const ButtonYellowTransparent = ({titleButton, direction}) => {
  return (
    <>
      <a className={fasdatec.commu__button__yellow__transparent} href={direction}>{titleButton}</a>
    </>
  )
}