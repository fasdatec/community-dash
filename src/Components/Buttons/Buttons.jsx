import React from 'react'
import fasdatec from './buttons.module.scss'

const Buttonyellow = ({titleButton, direction}) => {
  return (
    <>
      <a className={fasdatec.commu__button__yellow} href={direction}>{titleButton}</a>
    </>
  )
}
export default Buttonyellow