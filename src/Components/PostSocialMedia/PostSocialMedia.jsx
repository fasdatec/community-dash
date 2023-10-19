import React from "react";
import fasdatec from './postsocialmedia.module.scss'
import { ButtonYellowTransparentRound } from "../Buttons/Buttons";

const PostSocialMedia = ({titleSocialMedia, imglogo}) => {
  return (
    <>
    <div className={fasdatec.commu__card__social__media}>
      <div className={fasdatec.commu__img__sm}>
        <img className={fasdatec.commu__img__logo__sm} src={imglogo}/>
        <p>{titleSocialMedia}</p>
      </div>
      <div className={fasdatec.commu__button__card}>
        <ButtonYellowTransparentRound titleButton='Crear'/>
      </div>
    </div>
    </>
  )
}
export default PostSocialMedia

