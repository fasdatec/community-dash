import React from 'react'
import fasdatec from './buttons.module.scss'

export const ButtonYellow = ({titleButton, direction}) => {
  return (
    <>
      <a className={fasdatec.commu__button__yellow} href={direction}>{titleButton}</a>
    </>
  )
}
export const ButtonYellowRound = ({titleButton, direction}) => {
  return (
    <>
      <a className={fasdatec.commu__button__yellow__round} href={direction}>{titleButton}</a>
    </>
  )
}
export const ButtonYellowTransparentRound = ({titleButton, direction}) => {
  return (
    <>
      <a className={fasdatec.commu__button__yellow__transparent} href={direction}>{titleButton}</a>
    </>
  )
}

export const ButtonYellowRoundOnC = ({titleButton, direction}) => {
  return (
    <>
      <a className={fasdatec.commu__button__yellow__round} onClick={direction}>{titleButton}</a>
    </>
  )
}
export const ButtonYellowTransparentRoundOnC = ({titleButton, direction}) => {
  return (
    <>
      <a className={fasdatec.commu__button__yellow__transparent} onClick={direction}>{titleButton}</a>
    </>
  )
}

