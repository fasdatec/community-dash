import React from "react";
import fasdatec from './postsocialmedia.module.scss'
import { ButtonYellowTransparentRound } from "../Buttons/Buttons";

const VerstatusMedia = ({titleSocialMedia, imglogo}) => {
  return (
    <>
      <div className={fasdatec.commu__card__social__verstatus}>
        <div className={fasdatec.commu__img__sm__verstatus}>
          {/* <img className={fasdatec.commu__img__logo__sm} src={imglogo}/> */}
          <p>{titleSocialMedia}</p>
        </div>
        <div className={fasdatec.commu__button__card__verstatus}>
          <ButtonYellowTransparentRound titleButton='see' direction='/home/'/>
        </div>
      </div>
    </>
  )
}
export default VerstatusMedia
